let form=document.forms['myform'];
form.onclick

// Below function Executes on click of login button.

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    if (username == "1007427747" && password == "2207121910") {

        window.location = "user.html"; // Redirecting to other page.
        return false;
    }

            var errorMessage = document.getElementById("error-message");
            errorMessage.textContent = "لم يتم العثور على أي نتائج، يرجى التأكد من البيانات المدخلة";
            
         
 };


 
