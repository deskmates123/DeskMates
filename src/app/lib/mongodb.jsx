
const { MongoClient, ServerApiVersion } = require('mongodb');

// MongoDB URI from environment variables
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectToDatabase() {
  run()
  return client;
}



// Create a MongoClient with a MongoClientOptions object to set the Stable API version


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(error){
    console.log(error)
  }
  // finally {
  //   // Ensures that the client will close when you finish/error
  //   await client.close();
  // }
}

