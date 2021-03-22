// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBwE1_Co8V1aV09YwfSS9ZuaO-EleaQrIE",
      authDomain: "class-test-6e8cb.firebaseapp.com",
      databaseURL: "https://class-test-6e8cb.firebaseio.com",
      projectId: "class-test-6e8cb",
      storageBucket: "class-test-6e8cb.appspot.com",
      messagingSenderId: "81519372916",
      appId: "1:81519372916:web:014dfc5475997e9bf7bf21"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
