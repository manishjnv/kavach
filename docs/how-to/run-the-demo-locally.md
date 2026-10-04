# Run the demo locally

This page shows you how to run the demo page and the shield API on your computer.

## Before you begin

Make sure that you have these items:

- Node.js 18 or later.
- A Gemini API key from Google AI Studio.
- A copy of this repository.

## Start the demo

1. In the root folder of the repository, create a file named `.dev.vars`.

2. Add your key to the file.

   ```text
   GEMINI_API_KEY=your-key
   ```

3. Start the local server.

   ```bash
   npx wrangler pages dev site
   ```

4. Open `http://localhost:8788` in your browser.

5. In the **Try the shield** box, type a Hinglish sentence, and then select **Normalise**.

The page shows the English text and the time that the shield used.

> [!WARNING]
> Don't commit `.dev.vars`. Git ignores the file, and it must stay ignored.

## Call the API directly

To test the API without the page, send a POST request.

```bash
curl -X POST http://localhost:8788/api/shield \
  -H "content-type: application/json" \
  -d '{"text": "Mujhe kal subah 6 baje station pahunchna hai"}'
```

A successful response looks like this:

```json
{"normalised": "I need to reach the station at 6 tomorrow morning", "ms": 600}
```

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| "The shield service did not respond" | The key is missing or wrong | Check `.dev.vars`, then start the server again |
| "The free demo quota is used up for now" | The Gemini free limit is reached | Wait one minute, then try again |
| "Keep it under 300 characters" | The sentence is too long | Use a shorter sentence |

## Related pages

- [Architecture](../explanation/architecture.md)
- [How Kavach works](../explanation/how-kavach-works.md)
