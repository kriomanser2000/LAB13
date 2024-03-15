document.getElementById("userForm").addEventListener("submit", function(event) 
{
    event.preventDefault();
    displayUserInfo();
});
function displayUserInfo() 
{
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var country = document.getElementById("country").value;
    var userInfoDisplay = document.getElementById("userInfoDisplay");
    userInfoDisplay.innerHTML = "<h2>User Information:</h2>" +
        "<p><strong>Full Name:</strong> " + fullName + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Age:</strong> " + age + "</p>" +
        "<p><strong>Gender:</strong> " + gender + "</p>" +
        "<p><strong>Country:</strong> " + country + "</p>";
}