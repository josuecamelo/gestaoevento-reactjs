import firebase from 'firebase';



// Initialize Firebase
/*export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();*/
firebase.initializeApp(firebaseConfig);
export default firebase;