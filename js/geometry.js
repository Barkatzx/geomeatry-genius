document.getElementById('triangle-btn').addEventListener("click", function() {

  const input1Value = parseFloat(document.getElementById("triangle-field-b").value);
  const input2Value = parseFloat(document.getElementById("triangle-field-h").value);

  document.getElementById("triangle-b").innerText = input1Value;
  document.getElementById("triangle-h").innerText = input2Value;

  const total = 0.5 * input1Value * input2Value;
  
  const paragraphElement = document.getElementById("total");
  paragraphElement.innerHTML = (total);
})