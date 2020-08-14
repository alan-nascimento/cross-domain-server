const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => res.sendFile('./public/index.html', { root: __dirname }));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
