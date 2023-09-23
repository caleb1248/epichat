import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp({
	apiKey: 'AIzaSyCG4d8IBzqO1SHZjYMXJGx14O09wTgl4P8',
	authDomain: 'sveltechat-88eee.firebaseapp.com',
	projectId: 'sveltechat-88eee',
	storageBucket: 'sveltechat-88eee.appspot.com',
	messagingSenderId: '204074385845',
	appId: '1:204074385845:web:7d54218273fdd16d6499fc',
	measurementId: 'G-DSW0F9WQNQ'
});

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
