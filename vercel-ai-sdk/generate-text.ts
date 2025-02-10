import { anthropic } from '@ai-sdk/anthropic';
// import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

const model = anthropic('claude-3-5-haiky-latest');
// const model = openai('gpt-4-turbo-preview');

const answerMyQuestion = async (prompt: string) => {
  const { text } = await generateText({
    model,
    prompt
  })

  return text;
}

const result = await answerMyQuestion('What is the single best exercise for quads?');

console.log(result);
