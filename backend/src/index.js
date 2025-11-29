const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const snippetsRouter = require('./routes/snippets');
const tagsRouter = require('./routes/tags');
const prisma = require('./db');


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/snippets', snippetsRouter);
app.use('/api/tags', tagsRouter);


app.get('/', (req, res) => res.json({ ok: true }));


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend listening on ${port}`));


// graceful shutdown
process.on('SIGINT', async () => {
    console.log('Shutting down...');
    await prisma.$disconnect();
    process.exit(0);
});