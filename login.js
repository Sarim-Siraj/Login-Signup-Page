function login() {
    var email = document.getElementById("emaillogin")
    var passWord = document.getElementById("passwordlogin")
   
   


    if (email.value === "admin" && passWord.value === "admin") {
        window.location.href="hello.html"

    }
    else{
        alert("Wrong Password")

    }



   
}
