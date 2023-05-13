document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
    let inpEmail = document.querySelector("#email");
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      username.value === "" ||
      username.value.length < 3 ||
      username.value.length > 25
    ) {
      console.log("enter correct username");
      username.style.boxShadow = "0 0 15px red";
    } else {
      console.log(`Hello: ${username.value}`);
      username.style.boxShadow = "none";
    }
    if (!reg.test(inpEmail.value)) {
      console.log("incorrect email");
      email.style.boxShadow = "0 0 15px red";
    } else {
      console.log("correct email!!!!");
      email.style.boxShadow = "none";
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);
  

  async function formSend(e) {
    e.preventDefault();
    let password = document.getElementById("password");
   let confirm = document.getElementById("confirm");
 
  var lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) {  
    console.log("yes");
    password.classList.remove("error");
  } 
  else{
    console.log("error");
    password.classList.add("error");
    return 
  }
  
  var upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) {  
    console.log("yes"); 
    password.classList.remove("_error");
  }else{
    console.log("error");
    password.classList.add("error");
    return
  }

  var numbers = /[0-9]/g;
  if(password.value.match(numbers)) {  
    console.log("yes");
    password.classList.remove("_error");
  } else{
    console.log("error");
    password.classList.add("error");
    return
  }
  
   let symbols = /[!@#$%^&*]/;
  if(password.value.match(symbols) ) {  
    console.log("yes");
    password.classList.remove("_error");
  } else{
    console.log("error");
    password.classList.add("error");
    return
  }

  if(password.value.length >= 8) {
    console.log("yes");
    password.classList.remove("_error");
  } else{
    console.log("error");
    password.classList.add("error");
    return

  }

if(!reg.test(password != confirm) ){
    console.log('password no confirm')
  }else{
    console.log('password is confirm')
  }
}
});