const listOfUser = new Map([
  ["wm.facntic@univ-constantine2.dz", "webmaster64"],
  ["meriem.belguidoum@univ-constantine2.dz", "meriembel8080"],
  ["adambendjamaa2013@gmail.com", "adam159753654"]
]);

// Assign a privilege character to each email
// A => Admin
// T => Teacher
// S => Student
const privilegeOfUser = new Map([
  ["wm.facntic@univ-constantine2.dz", "A"],
  ["meriem.belguidoum@univ-constantine2.dz", "T"],
  ["adambendjamaa2013@gmail.com", "S"]
]);

// Verify email and password input and redirect
function login() {
  // get email and password value from input field in html
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // this variable keeps track of wether the credentials
  // entered are correct or not
  let infoCheck = false;

  // Compare the email and password entered with the table
  for (const [key, value] of listOfUser) {
    if (email == key && password == value) {
      alert("Login Successfull !");

      // window.location changes current displayed page
      window.location = redirect(email);
      infoCheck = true;
      break;
    }
  }

  // clear email and password field and display msg
  if (!infoCheck) {
    alert("Login Unsuccessfull !");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
}

// redirect to the page based on the privilege lvl of the email
function redirect(email) {
  // get the type of access the email has from the table
  let typeOfPrivilege = privilegeOfUser.get(email);

  // compare it to all privilege types Admin,Teacher,Student
  // return the link to the page of equal access
  // admin goes to 'accueilAdmin.html' page
  switch (typeOfPrivilege) {
    case "A":
      return "accueilAdmin.html";
    case "T":
      return "accueilEnseignant.html";
    case "S":
      return "accueilEtudiant.html";
  }
}
document.querySelectorAll(".input-field").forEach((item) => {
  item.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
      document.getElementById("button").click();
    }
  });
});
