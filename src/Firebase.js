import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyAu3afob9xlv-JmCHZTEAZmxgqi6UEXdhg",
    authDomain: "reactfirestore-bb0a6.firebaseapp.com",
    projectId: "reactfirestore-bb0a6",
    storageBucket: "reactfirestore-bb0a6.appspot.com",
    messagingSenderId: "838982961425",
    appId: "1:838982961425:web:59ae8dbf98aeed794264b0"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
