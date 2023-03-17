import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


// Vinculamos la firebase

const firebaseConfig = {
  apiKey: "AIzaSyBEpRKk9hQSeRo1KWiPAWwUH9KpqFHElRA",
  authDomain: "e-commerce-react-pm.firebaseapp.com",
  projectId: "e-commerce-react-pm",
  storageBucket: "e-commerce-react-pm.appspot.com",
  messagingSenderId: "684746592809",
  appId: "1:684746592809:web:3fdd7ce1d30386468f4238"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);