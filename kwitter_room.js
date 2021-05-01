// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCr1uAG-pMHwVv8M8bFCYUx6x-6qTd_53s",
      authDomain: "kwitter-b00d0.firebaseapp.com",
      databaseURL: "https://kwitter-b00d0-default-rtdb.firebaseio.com",
      projectId: "kwitter-b00d0",
      storageBucket: "kwitter-b00d0.appspot.com",
      messagingSenderId: "927671335881",
      appId: "1:927671335881:web:483416adce2956ca6cc618"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addroom() {
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", Room_name);
      window.location = "kwitter_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code

            });
      });
}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localstorage.removeitem("user_name");
      localstorage.removeitem("room_name");
      window.location="index.html";
}