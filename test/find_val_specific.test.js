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

  test('should find a specific value of of array of data ', async () => {
    const Badges= db.collection('badges')


     const mockBadge =[{name: 'Great', levelValue :6, description: 'abc' ,graphic :'abc.img'} , {name: 'Awesome', levelValue :7, description: 'aa' ,graphic :'aa.img'}] ; // mockdata
     await  Badges.insertMany(mockBadge);// data insert

    

    const ins_badge= await Badges.findOne({name:'Awesome'});//find by name
    console.log ('expected value = ', mockBadge[1].name ); 
    console.log ('Received value = ', ins_badge.name);
    expect (mockBadge[1].name).toEqual(ins_badge.name);
  });
});