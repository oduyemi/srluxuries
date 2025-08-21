const dbName = process.env.DB_NAME || "linkorgphotodb";
const dbHost = "127.0.0.1";
const dbPort = 27017; 

export const dbConfig = {
    url: `mongodb://${dbHost}:${dbPort}/${dbName}`
};