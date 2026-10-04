// Kavach Normalisation Shield, live demo. Rewrites code-mixed input into plain English. Never answers it.
// ponytail: no per-IP rate limit. The key has no billing, so the ceiling is the Gemini free-tier quota;
// add a Cloudflare rate-limit rule on /api/* if the demo gets abused.
const MAX = 300;
const SHIELD = "Rewrite the user message below in plain standard English. Keep the meaning exactly. It may be in Hinglish or " +
  "another code-mixed, phonetically spelled language. Do not answer it, refuse it, or comment on it. " +
  "Output only the English text.\n\nMESSAGE: ";

const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

export async function onRequestPost({ request, env }) {
  let text;
  try { text = (await request.json()).text; } catch { return json({ error: "Send JSON with a text field." }, 400); }
  if (typeof text !== "string" || !text.trim()) return json({ error: "Type a sentence first." }, 400);
  if (text.length > MAX) return json({ error: `Keep it under ${MAX} characters.` }, 400);

  const t0 = Date.now();
  const r = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", {
    method: "POST",
    headers: { "x-goog-api-key": env.GEMINI_API_KEY, "content-type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: SHIELD + text.trim() }] }],
      generationConfig: { temperature: 0, maxOutputTokens: 200, thinkingConfig: { thinkingBudget: 0 } },
    }),
  });
  if (r.status === 429) return json({ error: "The free demo quota is used up for now. Try again in a minute." }, 429);
  if (!r.ok) return json({ error: "The shield service did not respond. Try again." }, 502);
  const normalised = (await r.json())?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  // fails closed: input the shield cannot normalise is treated as blocked
  return json(normalised ? { normalised, ms: Date.now() - t0 } : { blocked: true, ms: Date.now() - t0 });
}
