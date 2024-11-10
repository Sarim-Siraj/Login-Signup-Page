function login() {
    var email = document.getElementById("emaillogin")
    var passWord = document.getElementById("passwordlogin")
   
   


    if (email.value === "admin" && passWord.value === "admin") {
        alert("Successfully Login")

    }
    else{
        alert("Wrong Password")

    }



   
}
