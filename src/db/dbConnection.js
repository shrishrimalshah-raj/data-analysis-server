import mongoose from 'mongoose';

class Database {

    constructor() {
        if (!Database.instance) {
            try {
                this.createConnection();
            } catch (error) {
                console.log(error);
            }

        }
    }

    getInstance() {
        return Database.instance;
    }

    async createConnection() {
        mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = mongoose.connection
        db.on('error', (error) => console.error(error))
        db.once('open', () => console.log('Database Connected successfully !!!'))
        Database.instance = true;
    }

}

export default Database;

