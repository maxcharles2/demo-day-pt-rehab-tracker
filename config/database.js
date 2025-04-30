const dotenv = require('dotenv');
dotenv.config()
// config/database.js
module.exports = {

    'url' : `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@express-app-cluster.pmoffnv.mongodb.net/pt-rehab-tracker-database?retryWrites=true&w=majority&appName=Express-app-cluster`, 
    'dbName': 'physical-therapy-rehab-tracker-app'
};
//'mongodb+srv://demo:demo@cluster0.q2ojb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//`mongodb+srv://maxcharlesdev:mongo-access@express-app-cluster.pmoffnv.mongodb.net/movie-list-database?retryWrites=true&w=majority&appName=Express-app-cluster`