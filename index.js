

document.getElementById("checkBtn").addEventListener("click", function() {
  let marks = document.getElementById("marks").value;
  let participated = document.getElementById("activities").checked;
  let result = document.getElementById("result");

  // Check conditions
  if (marks >= 70 && participated) {
    result.textContent = "✅ You are eligible for admission 🎓";
    result.style.color = "lightgreen";
  } else {
    result.textContent = "❌ Not eligible for admission.";
    result.style.color = "red";
  }
});
