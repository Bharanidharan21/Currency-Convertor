async function convert() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const amount = document.getElementById("amount").value;

    const response = await fetch(
        `http://localhost:8080/api/convert?from=${from}&to=${to}&amount=${amount}`,
        {
            method: "POST",
            headers: {
                "X-API-KEY": "currency-converter-api-key-12345"
            }
        }
    );

    if (!response.ok) {
        const text = await response.text();
        alert("Error: " + text);
        console.error("Response status:", response.status);
        console.error("Response text:", text);
        return;
    }

    const data = await response.json();
    document.getElementById("result").innerText =
        "Converted Amount: " + data.convertedAmount;
}
