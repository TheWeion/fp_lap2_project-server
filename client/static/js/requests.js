//
// ─── FRONTEND DB FUNCTIONS ──────────────────────────────────────────────────────
//

//Requires values of 
async function registerFormValidation(username, email, password, passwordConfirm){
    if(username && email){
      if(password == passwordConfirm){
        return true;
      }
    }else{
        return new Error("Invalid or incorrect information")
    }
}

const url = 'http://localhost:3000';

//Post request for submitting user data
async function submitRegister(){

  // TEST PAYLOAD //
  // const testPayload = {username: "user", password:"pass", email: "user@gamil.com"};

  // e.preventDefault();
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

//Get request for obtaining user data
async function submitLogin(){
  // TEST PAYLOAD //
  // const testPayload = {username: "user", password:"pass"};
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
