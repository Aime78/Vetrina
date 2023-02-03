// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBP9yRtzOc5weYs0f8-lBrAFRBn3g0oS9I',
  authDomain: 'vetrina-cca63.firebaseapp.com',
  projectId: 'vetrina-cca63',
  storageBucket: 'vetrina-cca63.appspot.com',
  messagingSenderId: '882384840752',
  appId: '1:882384840752:web:d00d42c3042587a872e5f5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
