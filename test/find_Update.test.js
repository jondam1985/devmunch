const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;
  let current_Date = Date().now;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  test('should Update specified data in schema', async () => {
    const Achievements= db.collection('achievements')// creating collection
    

     const mock_Achi =[{name: 'Aced It!', levelValue :6, description: 'abc' ,graphic :'abc.img', createdOn : current_Date} , {name: 'Just there ', levelValue :7, description: 'ab' ,graphic :'ab.img', createdOn: current_Date}] ;
     await  Achievements.insertMany(mock_Achi);/// inserting value

    
   
    const test_Achi= await Achievements.findOneAndUpdate( { name: 'Aced It!', levelValue :6, description: 'abc' ,graphic :'abc.img', createdOn : current_Date }, { $set: { "levelValue" : 7 } }); // updating
 
    expect (test_Achi).not.toBe(mock_Achi);// comparing 
  });
});