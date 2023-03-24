// submit-button on click event
submit_btn = document.getElementById("submit-btn");

submit_btn.addEventListener("click", function () {
    message = document.getElementById("input").value;
    
    // post request
    fetch("http://damian125.pythonanywhere.com/api/spam", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: message,
        }),
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        if (data["result"] == "spam") {
            document.getElementById("result").innerHTML = "Spam";
            document.getElementById("result").style.color = "red";
        } else {
            document.getElementById("result").innerHTML = "Not Spam";
            document.getElementById("result").style.color = "green";
        }
    });
});

