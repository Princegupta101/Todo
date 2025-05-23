import { CohereClient } from 'cohere-ai';

const cohereApiKey = process.env.COHERE_API_KEY;

export const cohere = new CohereClient({ token: cohereApiKey });