import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBq-BY9rFGlFtZLDciSkoFXEqyTfGhKXuY", // Add API Key
  databaseURL:"https://ecommerce-6a8e5-default-rtdb.asia-southeast1.firebasedatabase.app/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("Please mention your name to continue...");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
