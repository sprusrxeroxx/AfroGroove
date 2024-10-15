const dotenv = require('dotenv');
dotenv.config();

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG_PATH);
firebaseAdmin.initializeApp(firebaseConfig);