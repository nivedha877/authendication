
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAuth,FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC2A-cn3DLDX7MUa_749aHcMIzBLmGnzIg",
    authDomain: "facebook-87cb9.firebaseapp.com",
    projectId: "facebook-87cb9",
    storageBucket: "facebook-87cb9.firebasestorage.app",
    messagingSenderId: "759621553375",
    appId: "1:759621553375:web:97506b292f362dd4f12d6a",
    measurementId: "G-6HBXGZD976"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth   = getAuth(app);
  const provider = new FacebookAuthProvider();

  document.addEventListener("DOMContentLoaded",function(){

    const facebooklogin=document.getElementById("facebook"); 

    facebooklogin.addEventListener("click", function(event){
    // event.preventDefault();
    alert("hi");
    signInWithPopup(auth,provider)
    .then((result)=>{
    const user = result.user;
    const credential=FacebookAuthProvider.credentialFromResult(result);
    const accessToken=credential.accessToken;
    console.log(user);
    window.location.href="fb.html";
    })
    .catch((error)=>{
      console.log(error)
    const errorCode=error.code;
    const errorMessage= error.message;
    alert("errorMessage", errorCode, errorMessage);
    const email=error.customData.email;
    const credential=FacebookAuthProvider.credentialFromError(error);
    });    
  })
})
 