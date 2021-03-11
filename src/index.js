

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

import mainController from './Controllers/main';

const app = express();
const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  res.send('Z-USSD APP')
})

app.post('*', mainController )

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})