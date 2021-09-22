    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var cpassword = document.getElementById("cpassword");
    var usercheck = /^[A-Za-z. ]{3,30}$/ ;
    var passwordcheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/ ;
    var emailcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{2,})+\.([A-Za-z]{2,3})$/;
    let form = document.getElementById("form");

    form.addEventListener("submit" , validUser);
    username.addEventListener("blur" , validUser);
    form.addEventListener("submit" , validEmail);
    email.addEventListener("blur" , validEmail);
    form.addEventListener("submit" , validPass);
    password.addEventListener("blur" , validPass);
    form.addEventListener("submit" , validCpass);
    cpassword.addEventListener("blur" , validCpass);

    function validUser(e){
        e.preventDefault();
        if(usercheck.test(username.value)){
            document.getElementById("usereror").innerHTML = "";
            username.style.borderColor="green"; 
        }else{
            document.getElementById("usereror").innerHTML = "Username is not valid";
            username.style.borderColor="red";
        }
    }
    function validEmail(e){
        e.preventDefault();
        if(emailcheck.test(email.value)){
            document.getElementById("emaileror").innerHTML = "";
            email.style.borderColor="green";
        }else{
            document.getElementById("emaileror").innerHTML = "Email is not valid";
            email.style.borderColor="red";
        }
    }
    function validPass(e){
        e.preventDefault();
        if(passwordcheck.test(password.value)){
            document.getElementById("passwordreror").innerHTML = "";
            password.style.borderColor="green";
        }else{
            document.getElementById("passwordreror").innerHTML = "Password must be at least 6 characters";
            password.style.borderColor="red";
        }
    }
    function validCpass(e){
        e.preventDefault();
        if(!cpassword.value.match(password.value) || cpassword.value === ""){
            document.getElementById("cpassworderor").innerHTML = "Password2 is required";
            document.getElementById("cpassword").style.borderColor="red";
        }else{
            document.getElementById("cpassworderor").innerHTML = "";
            document.getElementById("cpassword").style.borderColor="green";
        }
    }
