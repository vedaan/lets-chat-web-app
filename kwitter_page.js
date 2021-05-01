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
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 function send() {
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
         name: user_name,
         message: msg,
         like: 0
     });
     document.getElementById("msg").value = "";
 }

 function getData() {
     firebase.database().ref("/" + room_name).on('value', function (snapshot) {
                 document.getElementById("output").innerHTML = "";
                 snapshot.forEach(function (childSnapshot) {
                             childKey = childSnapshot.key;
                             childData = childSnapshot.val();
                             if (childKey != "purpose") {
                                 firebase_message_id = childKey;
                                 message_data = childData;
                                 //Start code console.log(firebase_message_id); console.log(message_data); name1 = message_data['name']; message = message_data['message']; like = message_data['like']; name_with_tag = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'>"; message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; row = name_with_tag + message_with_tag +like_button + span_with_tag; document.getElementById("output").innerHTML += row; //End code