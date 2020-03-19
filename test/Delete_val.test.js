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

  test('should delete a value ', async () => {
    const Achievements= db.collection('achievements')// create collection
    

     const mock_Achi =[{name: 'Aced It!', levelValue :6, description: 'abc' ,graphic :'abc.img', createdOn : current_Date} , {name: 'Just there ', levelValue :7, description: 'ab' ,graphic :'ab.img', createdOn: current_Date}] ;
     await  Achievements.insertMany(mock_Achi);// adding values

    
   
    const test_Achi= await Achievements.findOneAndDelete( { name: 'Aced It!'});
    console.log ('deleted Value', test_Achi); 
  
    expect (test_Achi).toEqual(mock_Achi[0]);
  });
});