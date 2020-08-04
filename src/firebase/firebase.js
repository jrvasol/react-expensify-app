import * as firebase from 'firebase';

let firebaseConfig = {};

if(process.env.NODE_ENV === 'test') {
  firebaseConfig = {
    apiKey: "AIzaSyAL80rs0j51fGHrcv92q3GyPyJ19aKP0Mw",
    authDomain: "expensify-test-ebf4f.firebaseapp.com",
    databaseURL: "https://expensify-test-ebf4f.firebaseio.com",
    projectId: "expensify-test-ebf4f",
    storageBucket: "expensify-test-ebf4f.appspot.com",
    messagingSenderId: "305418017930",
    appId: "1:305418017930:web:08a1cc81aeba5844d36173"
  };
} else {
  firebaseConfig = {
    apiKey: "AIzaSyDB9QkXF8JGkwEOIonCS5ZCBnLyoFWEDh8",
    authDomain: "expensify-e1760.firebaseapp.com",
    databaseURL: "https://expensify-e1760.firebaseio.com",
    projectId: "expensify-e1760",
    storageBucket: "expensify-e1760.appspot.com",
    messagingSenderId: "120970412433",
    appId: "1:120970412433:web:f769b86823e6f203871a30",
    measurementId: "G-DKR4WM00FS"
  };
}

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  export { firebase, database as default };