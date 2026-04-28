import express from 'express';
import { CacheFactory, CacheType } from '../../partA/lib/api/CacheFactory';

const app = express();
app.use(express.json());

// 2-р өдөр хийсэн Factory-оо ашиглан 10 багтаамжтай LRU кэш үүсгэх
const myCache = CacheFactory.createCache<string>(CacheType.LRU, 10);

// Дата хадгалах Endpoint
app.post('/cache', (req, res) => {
    const { key, value } = req.body;
    myCache.set(key, value);
    res.status(201).send({ message: "Data cached successfully" });
});

// Дата авах Endpoint
app.get('/cache/:key', (req, res) => {
    const value = myCache.get(req.params.key);
    if (!value) {
        return res.status(404).send({ error: "Key not found or expired" });
    }
    res.send({ key: req.params.key, value });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));