//
// ─── FRONTEND DB FUNCTIONS ──────────────────────────────────────────────────────
//

//Requires values of 
async function registerFormValidation({username, email, password}, passwordConfirm){
    if(username && email){
      if(password == passwordConfirm){
        return true;
      }
    }else{
        return new Error("Invalid or incorrect information"), false;
    }
}

const url = 'http://localhost:3000';

//Post request for submitting user data
async function submitRegister(){

  // TEST PAYLOAD //
  const testPayload = {username: "user",  email: "user@gamil.com", password:"pass"};
  const passwordConfirm = document.querySelector('#register-password-confirm').value;
  // e.preventDefault();

  if(registerFormValidation(testPayload, passwordConfirm)){
    try {
      const options = {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(testPayload)
      }
      const response = await fetch(`${url}/users`, options);
      if(!response.ok) { 
        throw console.error("Invalid request data");
      }
    } catch (err) {
      console.warn(err);
    }
  }
}

//Post request for submitting login user data
async function submitLogin(){
  // TEST PAYLOAD //
  const testPayload = {username: "user", password:"pass"};

  // check if token exists and is valid
  if(tokenIsValid){

  }else{
    // login and recieve new token
    try {
      const options = {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(testPayload)
      }
      const response = await fetch(`${url}/users`, options);
      const data = await response.json()
      if(response.ok){
        console.log(data);
        saveToken(data);
      }else { 
        throw console.error("Invalid request data");
      }

    } catch (err) {
      console.warn(err);
    }
  }
}

//Get request to obtain users habits
async function getHabits(){

  if(currentUser()){
    try {
      // TEST PAYLOAD //
      //user_id should be taken from token in local storage
      const user_id = 1;

      const options = {
          method: 'GET',
          headers: { "Content-Type": "application/json" },
      }
      const response = await fetch(`${url}/habits/user/${user_id}`, options);
      if(!response.ok) { 
        throw console.error("Invalid request data");
      }
    } catch (err) {
      console.warn(err);
    }
  }else{
    throw console.error("User is not logged in");
  }
}