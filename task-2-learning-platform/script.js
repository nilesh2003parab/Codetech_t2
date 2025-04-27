// script.js

// Save progress when a lesson starts playing
function saveProgress(lesson) {
    localStorage.setItem("lastWatched", lesson);
  }
  
  // Load progress when the page is loaded
  function loadProgress() {
    const progress = localStorage.getItem("lastWatched") || "No progress yet";
    document.getElementById("progress").innerText = `Last watched: ${progress}`;
  }
  
  // Run loadProgress on page load
  window.onload = loadProgress;

  // Show logged-in user's email & toggle links
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    document.getElementById("user-welcome").innerText = `Welcome, ${user.email}`;
    document.getElementById("login-link").style.display = "none";
    document.getElementById("logout-link").style.display = "inline-block";
  } else {
    document.getElementById("user-welcome").innerText = "You're not logged in";
    document.getElementById("login-link").style.display = "inline-block";
    document.getElementById("logout-link").style.display = "none";
  }
});

// Logout function
function logout() {
  firebase.auth().signOut()
    .then(() => {
      window.location.href = "login.html";
    });
}
