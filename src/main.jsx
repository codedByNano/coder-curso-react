import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAb3N12z_tMCJJWXHfDoAK9v163dgtTtsM",
    authDomain: "coder-ecom.firebaseapp.com",
    projectId: "coder-ecom",
    storageBucket: "coder-ecom.appspot.com",
    messagingSenderId: "34672375639",
    appId: "1:34672375639:web:7a035dcc4c46679f63b012"
};
  
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
