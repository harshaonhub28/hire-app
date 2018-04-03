dbConfig = {
  //dbConnection: process.env.DB_CONNECTION || "mongodb://localhost:27017/surveyApp"
  dbConnection: process.env.DB_CONNECTION || `mongodb://dbforharsha2803:dbforharsha2803@ds151450.mlab.com:51450/my_db`
};

module.exports = {dbConfig};
