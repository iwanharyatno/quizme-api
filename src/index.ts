import e from 'express';
import cors from 'cors';
import apiV1 from '@routes/index.js';

const app = e();

app.use(e.json())
app.use(cors());

app.use('/api/v1', apiV1);

app.listen(3000, () => console.log('Application running on port 3000'));