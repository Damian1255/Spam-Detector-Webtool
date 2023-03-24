// submit-button on click event
submit_btn = document.getElementById("submit-btn");
loading = document.getElementById("loading");
output = document.getElementById("output");

submit_btn.addEventListener("click", function () {
    submit_btn.disabled = true;
    loading.style.display = "block";
    message = document.getElementById("input").value;
    
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
        loading.style.display = "none";
        submit_btn.disabled = false;
        
        prediction = data.prediction;
        confidence = data.confidence.toFixed(2);;

        if (prediction == 0) {
            output.innerHTML = "<p>Your message is " + confidence + "% <b>unlikely</b> a Spam.</p>";
        } else {
            output.innerHTML = "<p>Your message is " + confidence + "% <b>likely</b> a Spam.</p>";
        }
    });
});

