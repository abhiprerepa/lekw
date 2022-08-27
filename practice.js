//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAF9k02lPbfSpfM6qQxZQiZjxJNLgf_15M",
    authDomain: "kwitter-e751e.firebaseapp.com",
    projectId: "kwitter-e751e",
    storageBucket: "kwitter-e751e.appspot.com",
    messagingSenderId: "520072631830",
    appId: "1:520072631830:web:60337cb368b264cc0d8737"
  };

  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}