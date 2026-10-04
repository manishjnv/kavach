# Run the benchmark

In this tutorial, you run the Kavach benchmark in Google Colab and read the results.
The run takes about 20 minutes and uses free tiers only.

At the end, you have a chart and a results file for 30 harmful prompts and 30 safe prompts.

## Before you begin

Make sure that you have these items:

- A Google Account, for Colab.
- A Hugging Face account and an access token.
- A Gemini API key from Google AI Studio.

## 1. Accept the ShieldGemma license

1. Open the [ShieldGemma 2B model page](https://huggingface.co/google/shieldgemma-2b).
2. Sign in to Hugging Face.
3. Accept the license on the model page.

## 2. Open the notebook

1. Open [Google Colab](https://colab.research.google.com).
2. Select **File > Upload notebook**.
3. Upload `Kavach_Benchmark.ipynb` from this repository.

## 3. Select the runtime

1. Select **Runtime > Change runtime type**.
2. Select **T4 GPU**.
3. Select **Save**.

## 4. Add your keys

1. Select the key icon in the left bar.
2. Add a secret named `HF_TOKEN` with your Hugging Face token.
3. Add a secret named `GEMINI_API_KEY` with your Gemini API key.
4. Turn on notebook access for the two secrets.

> [!WARNING]
> Don't paste a key into a notebook cell. A key in a cell goes into the saved file.

## 5. Run the notebook

1. Select **Runtime > Run all**.
2. Wait for the first cell to finish. If it stops with a GPU message, select the GPU again.
3. Wait about 20 minutes for the run to finish.

The notebook waits between Gemini calls to stay inside the free limit.
If a cell stops with a rate-limit message, wait a few minutes and run that cell again. The notebook keeps the completed calls.

## 6. Read the results

The notebook prints a summary and shows a chart with two panels:

- **Harmful prompts that slip through:** the slip rate for English, Hinglish, and Hinglish with Kavach.
- **Safe prompts wrongly blocked:** the wrong-block rate for the same three styles.

The last cell runs the heavy Hinglish level and prints a second summary.

Compare your numbers with the [pilot results](../explanation/method-and-limits.md#results).
Small differences are normal, because the sample is small.

## 7. Save the files

The notebook downloads four files to your computer:

| File | Content |
|---|---|
| `results.json` | Scores and categories. No harmful prompt text |
| `chart.png` | The chart |
| `results_full.json` | All prompt text for the casual run |
| `results_heavy_full.json` | All prompt text for the heavy run |

> [!WARNING]
> Don't publish the two full files. They contain harmful prompt text.

## Next steps

- To learn what the numbers mean, see [Method and limits](../explanation/method-and-limits.md).
- To try the shield live, see [Run the demo locally](../how-to/run-the-demo-locally.md).
