import MongoClient from 'mongodb';

export async function connnect() {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true    
        });
        const db = client.db('rest-api-es');
        console.log('db is connected');
        return db;
    } catch (e) {
        console.log('error --> ', e); 
    }
}

