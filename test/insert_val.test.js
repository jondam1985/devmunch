const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

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

  test('should insert a value ', async () => {
  
    const Badges= db.collection('badges') // create badges collection

   
     const mockBadge ={name: 'Great', levelValue :6}; // mock values
     await  Badges.insertOne(mockBadge); // inserting mockvalues

  
    const ins_badge= await Badges.findOne({name:'Great'});
    expect (ins_badge).toEqual(mockBadge); // comparing result
  });
});