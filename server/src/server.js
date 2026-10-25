import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app.js';

const port = Number(process.env.PORT || 5000);
if (process.env.NODE_ENV === 'production') {
  const missing = ['MONGODB_URI', 'CLIENT_URL'].filter((name) => !process.env[name]);
  if (missing.length) {
    console.error(`Missing required production environment variables: ${missing.join(', ')}`);
    process.exit(1);
  }
}

const mongoUri = process.env.MONGODB_URI || (process.env.NODE_ENV === 'production' ? '' : 'mongodb://127.0.0.1:27017/ai_mystery_room');
try {
  await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 });
  app.listen(port, () => console.log(`Mystery API listening on ${port}`));
} catch (error) {
  console.error('Database connection failed. Verify MONGODB_URI, database credentials, and network access.');
  process.exit(1);
}
