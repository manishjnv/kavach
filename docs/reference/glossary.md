# Glossary

Each term has one meaning in this project.

| Term | Meaning |
|---|---|
| attack | A rewrite of an English prompt into code-mix, made to test the guardrail |
| casual | Code-mix that keeps most key words in English |
| code-mix | Text that mixes two languages in Latin script |
| fail closed | To block a prompt when the shield can't rewrite it |
| flag | The guardrail verdict that a prompt breaks a policy |
| guardrail | The safety classifier under test. In the pilot, ShieldGemma 2B |
| heavy | Code-mix that uses Hindi words for the key nouns and verbs |
| Hinglish | Code-mix of Hindi and English |
| Kavach | The project, and the shield that the project makes |
| normalise | To rewrite code-mix text into plain standard English |
| rewrite model | The model that rewrites text. In the pilot, Gemini 2.5 Flash |
| score | The probability, from 0 to 1, that a prompt breaks a policy |
| shield | The step that normalises a prompt before the guardrail reads it |
| slip rate | The percentage of harmful prompts that the guardrail doesn't flag |
| threshold | The lowest score at which the guardrail flags a prompt. In the pilot, 0.5 |
| wrong-block rate | The percentage of safe prompts that the guardrail flags |
