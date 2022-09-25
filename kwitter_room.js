
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBOR5lPZWUKnS4QtDFrnHpOvsvQhc0tHqM",
      authDomain: "kwitter-9ada5.firebaseapp.com",
      databaseURL: "https://kwitter-9ada5-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ada5",
      storageBucket: "kwitter-9ada5.appspot.com",
      messagingSenderId: "317097891912",
      appId: "1:317097891912:web:5ed558046b5b7b88cc207d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
