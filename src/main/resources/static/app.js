function convert() {

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const amount = document.getElementById("amount").value;

    fetch(`http://localhost:8080/api/convert?from=${from}&to=${to}&amount=${amount}`, {
        method: "POST",
        headers: {
            "X-API-KEY": "API12345"
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText =
            `Converted Amount: ${data.convertedAmount}`;
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
