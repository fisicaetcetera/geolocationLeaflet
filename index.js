const express = require('express');
const Datastore = require('nedb');
//
const app = express();
app.listen(process.env.PORT || 8000, function() { 
	console.log("SERVER STARTED PORT: 8000")};
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))
//blablabla

const database = new Datastore('database.db');
database.loadDatabase();

app.get('index', (request, response) => {
  response.json({test: 123});
});

app.post('/aaa', (request, response) => {
  console.log('I got a request!');
  const data1 = request.body;
  const timestamp = Date.now();
  data1.status = 'server: success!';
  data1.timestamp = timestamp;
  database.insert(data1);
  console.log(data1);
  response.json(data1);
})
