document.getElementById("registrationForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  let data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value
  };

  try {
    let res = await fetch("https://h3na2y34gf.execute-api.us-east-1.amazonaws.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    let result = await res.json();

    // ✅ Only show success/failure message
    document.getElementById("msg").innerText = result.message;
    document.getElementById("msg").style.color = "green";

    document.getElementById("registrationForm").reset();

  } catch (err) {
    document.getElementById("msg").innerText = "❌ Error submitting form!";
    document.getElementById("msg").style.color = "red";
  }
});
