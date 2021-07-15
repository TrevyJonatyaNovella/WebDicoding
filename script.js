document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function myFunction() {
 var txt;
   var person = prompt("Please enter your name:", "Write Your Name");
        if (person == null || person == "") {
            txt = "User cancelled the prompt.";
        } else {
            txt = "Hello " + person + "! How are you today? Stay Healthy! " ;
        }
        document.getElementById("demog").innerHTML = txt;
}