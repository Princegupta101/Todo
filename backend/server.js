import cors from 'cors';
import dotenv from 'dotenv';
import  express from 'express';

dotenv.config();

import summarize from './routes/summarize.js';
import todos from './routes/todos.js';
const app = express(); 

app.use(
    cors({
        origin: '*',
    })
  );
  
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Pong');
});

app.use('/api/todos',todos)
app.use('/api/summarize',summarize)

const PORT =process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));