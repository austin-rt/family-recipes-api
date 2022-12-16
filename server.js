const express = require('express');
const routes = require('./routes');
const db = require('./db');
const cors = require('cors');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/api', routes);

app.get('*', (req, res) => {
  console.log('root wildcard, did you forget /api?');
  res.send({ msg: 'root wildcard, did you forget /api?' });
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
