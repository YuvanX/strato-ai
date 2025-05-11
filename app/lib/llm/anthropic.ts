import Anthropic from '@anthropic-ai/sdk';

export const anthropic = new Anthropic({
  apiKey: 'my_api_key', // defaults to process.env["ANTHROPIC_API_KEY"]
});



