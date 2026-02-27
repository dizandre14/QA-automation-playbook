require('dotenv').config(); // This "activates" the .env file

console.log("Testing URL:", process.env.BASE_URL);
console.log("Secret DB Pass:", process.env.DB_PASSWORD);