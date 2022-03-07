function testEmail(email){
    const regex = /^[a-zA-Z]+([0-9]*)?[\.\-_]?([0-9]*)?[a-zA-Z]*@[a-z]+(\.){1}[a-z]{1,3}$/s;
    if(regex.test(email)){
      console.log("email valid");
    }else {
      console.log("email not valid");
    }
  }
  const email = "ahmedgmail.lkmm";
testEmail(email);