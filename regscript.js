function sendemail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "chinthan005@gmail.com",/*your email*/
        Password : "passward",/*your passward*/
        To : 'chinthan005@gmail.com',/*your email*/
        From : document.getElementById("email").ariaValueMax,
        Subject : "enquiry",
        Body : "Name:"+document.getElementById("name").value
            +"<br> Email:"+document.getElementById("email").value
            +"<br> Phone no:"+document.getElementById("phone").value
            +"<br> Phone no:"+document.getElementById("location1").value
            +"<br> Phone no:"+document.getElementById("location2").value
            +"<br> Message:"+document.getElementById("message").value
            }).then(
      message => alert("Registered Succesfully")
    );    
}