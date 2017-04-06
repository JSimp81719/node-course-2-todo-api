//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany

  // db.collection('Users').deleteMany({name: 'Joseph'}).then((result) => {
  //     console.log(result);
  // })

  //deleteOne
  db.collection('Users').deleteOne({
    _id: new ObjectID('58e6c72503e0af03ff1b0d75')
  }).then((result) => {
    console.log(result);
  });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  // db.close();
});
