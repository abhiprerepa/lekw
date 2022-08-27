
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name'> id="+Room_names+"  onclick='redirectToRoomName(this.id)'  >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function redirectToRoomName()
{
    console.log
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";

}