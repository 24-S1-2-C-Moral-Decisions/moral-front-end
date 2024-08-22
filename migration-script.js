const { MongoClient } = require('mongodb');

async function migrateData() {
  const client = new MongoClient('mongodb://115.146.86.210:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {

    await client.connect();

    const sourceDb = client.db('reddit');
    const questionsCollection = sourceDb.collection('questions');
    const targetDb = client.db('sorted_questions');

    const topicsSet = new Set();

    // iterate all documents
    const cursor = questionsCollection.find();
    while (await cursor.hasNext()) {
      const question = await cursor.next();

      ['top1', 'top2', 'top3', 'top4'].forEach((key) => {
        const topic = question[key];
        if (topic) {
          topicsSet.add(topic);
          targetDb.collection(topic).insertOne(question);
        }
      });
    }

    const topics = Array.from(topicsSet);

  } catch (error) {
    console.error('Error', error);
  } finally {
    await client.close();
  }
}

migrateData();