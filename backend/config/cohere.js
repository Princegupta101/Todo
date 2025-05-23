import { CohereClient } from 'cohere-ai';
import {config} from 'dotenv';

config();

const cohereApiKey = process.env.COHERE_API_KEY;

export const cohere = new CohereClient({ token: cohereApiKey });