// submit-button on click event
submit_btn = document.getElementById("submit-btn");
loading = document.getElementById("loading");
output = document.getElementById("output");

submit_btn.addEventListener("click", function () {
    submit_btn.disabled = true;
    output.style.display = "none";
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
        prediction = data.prediction;
        confidence = data.confidence.toFixed(2);

        loading.style.display = "none";
        output.style.display = "block";
        submit_btn.disabled = false;

        if (prediction == 0) {
            output.innerHTML = "<p>Your message is <b>" + confidence + "% unlikely a Spam.</b></p>";
        } else {
            output.innerHTML = "<p>Your message is <b>" + confidence + "% likely a Spam.</b></p>";
        }
    });
});

