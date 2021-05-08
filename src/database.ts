require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(db => {
    console.log('Database connected...');
}).catch((e) => {
    console.log({e});
})