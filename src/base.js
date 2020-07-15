import firebase from 'firebase';
import Rebase from 're-base';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCFZq4pFPtNxXsWI6b_qQ9yrRuwi5cwHhc',
  authDomain: 'listings-app-68e47.firebaseapp.com',
  databaseURL: 'https://listings-app-68e47.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
