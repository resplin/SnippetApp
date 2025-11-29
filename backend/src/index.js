import express from "express";
import cors from "cors";
import snippetRoutes from './routes/snippetRoutes.js';
import tagRoutes from './routes/tagRoutes.js';

const app = express();
const PORT = 5000;

const corsOptions = {
    origin: 'http://localhost:5173'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/snippet', snippetRoutes);
app.use('/tag', tagRoutes);

app.get("/", (req, res) => {
    res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
