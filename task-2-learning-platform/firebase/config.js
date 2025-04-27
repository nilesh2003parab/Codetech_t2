<script type="module">
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyCLoXGqFxamnByKIJ_56G_ikhHTSJ4eWFA",
    authDomain: "learnx-808b1.firebaseapp.com",
    projectId: "learnx-808b1",
    storageBucket: "learnx-808b1.firebasestorage.app",
    messagingSenderId: "639538489827",
    appId: "1:639538489827:web:abffd8465b01db315518d6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  


  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
</script>
