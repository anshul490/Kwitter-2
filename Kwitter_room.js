var firebaseConfig = {
    apiKey: "AIzaSyCCpegH-ip6jI_0EaQYHMnOJmgoxT8w6Qo",
    authDomain: "kwitter-project-1d7a2.firebaseapp.com",
    databaseURL: "https://kwitter-project-1d7a2-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1d7a2",
    storageBucket: "kwitter-project-1d7a2.appspot.com",
    messagingSenderId: "264802004583",
    appId: "1:264802004583:web:26f27452285cc998c4aec2",
    measurementId: "G-JQ2ZVEVGX0"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();
