//object to store details
 let userDetailsDatabase = {}



function getUserDetails(){

    let userName = prompt("Enter your username")

    if (userName == null){
        return
    }

  function validateUserName(userName){
    if(userName.length < 10 && userName.length > 0){
        return true 
    }else{
        return false
    }
   }

  while(validateUserName(userName)== false){
    userName = prompt("username must be less than 10 and greater than 0")
  }

  userDetailsDatabase["userName"] = userName

//email

 let email = prompt("Enter your email address")
 if (email == null){
    return
}

 function ValidateEmail(_email)
 {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test)
  {
    return true
  }
    else{
    return false
 }
 }
 while(ValidateEmail(email) == false){
      email = prompt("Enter a valid email")
 }

 userDetailsDatabase["Email"] = email
//phonenumber

 let phoneNumber = prompt("enter your phone number")

 if (phoneNumber == null){
    return
}

 function validatephoneNumber(phoneNumber){
    if (phoneNumber.length == 11 ){
        return true
    }else{
        return false
    }
 }

 while(validatephoneNumber(phoneNumber) == false){
    phoneNumber = prompt(" phone number must be 11 digits, try again")
 }
 
 userDetailsDatabase["phoneNumber"] = phoneNumber

 //password
 

 let Password = prompt("enter your password")

 if (Password== null){
    return
}

 function validatePassword(password){
 if (password.length < 6){
    return false 
 }else{
    return true 
 }
 }
 while(validatePassword(Password) == false){
  Password = prompt("password must not be less than 6 digits")
 }

 userDetailsDatabase["Password"] = Password

//confirmpassword

 let confirmPassword = prompt("confirm your password")

 if (confirmPassword == null){
    return
}

 function validateconfirmPassword(confirmPassword){
    if (confirmPassword != Password ){
        return false 
    }else{
        return true
    }
 }

 while (validateconfirmPassword(confirmPassword) == false){
    confirmPassword = prompt("confirm password does not match password, try again")
 }
 userDetailsDatabase["confirmPassword"] = confirmPassword

}


function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.userName}\nphoneNumber: ${userDetailsDatabase.phoneNumber}\nEmail: ${userDetailsDatabase.Email}`)
}
