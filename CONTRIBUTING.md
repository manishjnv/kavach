# Contributing to Kavach

Thank you for your help. This page tells you the rules for a change to the code or the docs.

## Safety rules

> [!WARNING]
> Don't add harmful prompt text to the repository. Publish scores and categories only.

- Don't commit a key or a token. Write the key name only.
- Don't commit a result file that contains prompt text for harmful prompts.

## Documentation rules

Each page in `docs/` has one type:

| Folder | Type | Content |
|---|---|---|
| `docs/tutorials/` | Tutorial | A lesson that you learn from by doing |
| `docs/how-to/` | How-to | Steps for one goal |
| `docs/reference/` | Reference | Facts to look up |
| `docs/explanation/` | Explanation | Why and how something works |

Write in this style:

- Write to the reader in the second person. Use the active voice and the present tense.
- Use sentence case for headings.
- Write short sentences. Use a maximum of 20 words for an instruction and 25 words for a description.
- Write one instruction in each sentence. Use numbered steps for a procedure.
- Use the terms in the [glossary](docs/reference/glossary.md). One term has one meaning.

## Check your change

1. Install [Vale](https://vale.sh).

2. Download the style package.

   ```bash
   vale sync
   ```

3. Run the check.

   ```bash
   vale README.md CONTRIBUTING.md SECURITY.md docs
   ```

4. Correct each error before you open a pull request.

5. If you change a Mermaid diagram, make sure that it renders in the GitHub preview.

The same check runs on each pull request.
