var firebaseConfig = {
    apiKey: "AIzaSyDkXl2uQbXzbS4fjufE0lgRf1sDxENoUjo",
    authDomain: "kwitter-759fb.firebaseapp.com",
    databaseURL: "https://kwitter-759fb-default-rtdb.firebaseio.com",
    projectId: "kwitter-759fb",
    storageBucket: "kwitter-759fb.appspot.com",
    messagingSenderId: "388953885599",
    appId: "1:388953885599:web:4159a22b5bd3509f7b0baa"
  };
      
    // Initialize Firebase
    firebase.initializeApp (firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Names -" + Room_names);
    row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}