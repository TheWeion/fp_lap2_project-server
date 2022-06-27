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

const url = "localhost:3000";
// TEST PAYLOAD //
const testPayload = {username: "user", password:"pass", email: "user@gamil.com"};

//Post request for submitting user data
async function submitRegister(){
  try {
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(`${url}`, config)
    //const json = await response.json()
    if (response.ok) {
      console.log(response);
        return response
    } 
  } catch (error) {
      console.error(error);
  }
}

//Get request for obtaining user data
function submitLogin(){
  
}

submitRegister(testPayload);