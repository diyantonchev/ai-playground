import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

const model = anthropic('claude-3-5-haiky-latest');

const answerMyQuestion = async (prompt: string) => {
  const { textStream } = streamText({
    model,
    prompt
  })

  try {
    for await (const text of textStream) {
      process.stdout.write(text);
    }
  } catch (error) {
    console.error('Error streaming response:', error);
  }
}

await answerMyQuestion('What is topology?');
