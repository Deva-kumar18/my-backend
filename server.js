import express from 'express';
import dotenv from 'dotenv';
import sequelize from './configDb/db.js';

dotenv.config(); 

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000; 

async function syncAndStart() {
  try {
    await sequelize.authenticate();
    console.log("✅ DB connection success");

    await sequelize.sync({ force: false });
    console.log("✅ All models synced");

    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error connecting to DB:", err);
  }
}

syncAndStart();
