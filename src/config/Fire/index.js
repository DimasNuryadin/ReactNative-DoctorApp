import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyA83oaxxPfUKre-rzgNmuxrwj9rN-dpOfo',
  authDomain: 'my-doctor-acd4a.firebaseapp.com',
  databaseURL:
    'https://my-doctor-acd4a-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'my-doctor-acd4a',
  storageBucket: 'my-doctor-acd4a.appspot.com',
  messagingSenderId: '759515297653',
  appId: '1:759515297653:web:ccac35113793163121053c',
});

const Fire = firebase;

export default Fire;
