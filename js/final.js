let serial = 0;
// First Card Function
document.getElementById('triangle-btn').addEventListener("click", function() {
    serial += 1;
    const input1Value = parseFloat(document.getElementById("triangle-fieldb").value);
    const input2Value = parseFloat(document.getElementById("triangle-fieldh").value);

    if (isNaN(input1Value) || isNaN(input2Value)) {
        alert("Invalid input! Please enter a valid number.");
        return;
      }
  
    document.getElementById("triangle-b").innerText = input1Value;
    document.getElementById("triangle-h").innerText = input2Value;
    const mainName = document.getElementById("triangle-name").innerText;
  
    const total = 0.5 * input1Value * input2Value;
    const totalValue = total.toFixed(2);

    displayData(mainName, totalValue);
})


// Second Card Function
document.getElementById('rectangle-btn').addEventListener("click", function() {
    serial += 1;
    const input1Value = parseFloat(document.getElementById("rectangle-fieldw").value);
    const input2Value = parseFloat(document.getElementById("rectangle-fieldi").value);

    if (isNaN(input1Value) || isNaN(input2Value)) {
        alert("Invalid input! Please enter a valid number.");
        return;
      }
  
    document.getElementById("rectangle-w").innerText = input1Value;
    document.getElementById("rectangle-i").innerText = input2Value;
    const mainName = document.getElementById("rectangle-name").innerText;
  
    const total = input1Value * input2Value;
    const totalValue = total.toFixed(2);

    displayData(mainName, totalValue);
})


// Third Card Function
document.getElementById('parallelogram-btn').addEventListener("click", function() {
    serial += 1;
    const input1Value = parseFloat(document.getElementById("parallelogram-b").value);
    const input2Value = parseFloat(document.getElementById("parallelogram-h").value);

    if (isNaN(input1Value) || isNaN(input2Value)) {
        alert("Invalid input! Please enter a valid number.");
        return;
      }
  
    document.getElementById("parallelogram-totalb").innerText = input1Value;
    document.getElementById("parallelogram-totalh").innerText = input2Value;
    const mainName = document.getElementById("rectangle-name").innerText;
  
    const total = input1Value * input2Value;
    const totalValue = total.toFixed(2);

    displayData(mainName, totalValue);
})


// Fourth Card Function
document.getElementById('rhombus-btn').addEventListener("click", function() {
    serial += 1;
    const input1Value = parseFloat(document.getElementById("rhombus-field1").value);
    const input2Value = parseFloat(document.getElementById("rhombus-field2").value);

    if (isNaN(input1Value) || isNaN(input2Value)) {
        alert("Invalid input! Please enter a valid number.");
        return;
      }
  
    document.getElementById("rhombus-d1").innerText = input1Value;
    document.getElementById("rhombus-d2").innerText = input2Value;
    const mainName = document.getElementById("rhombus-name").innerText;
  
    const total = 0.5 * input1Value * input2Value;
    const totalValue = total.toFixed(2);

    displayData(mainName, totalValue);
})

// Five Card Function
document.getElementById('rhombus-btn').addEventListener("click", function() {
    serial += 1;
    const input1Value = parseFloat(document.getElementById("rhombus-field1").value);
    const input2Value = parseFloat(document.getElementById("rhombus-field2").value);

    if (isNaN(input1Value) || isNaN(input2Value)) {
        alert("Invalid input! Please enter a valid number.");
        return;
      }
  
    document.getElementById("rhombus-d1").innerText = input1Value;
    document.getElementById("rhombus-d2").innerText = input2Value;
    const mainName = document.getElementById("rhombus-name").innerText;
  
    const total = 0.5 * input1Value * input2Value;
    const totalValue = total.toFixed(2);

    displayData(mainName, totalValue);
})



// Function Declare For Aria Calculation
function displayData(mainName, totalValue){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${mainName}</td>
    <td>${totalValue} cm<sup>2</sup></td>
    <td> <button class="btn-primary rounded-btn">convert to m<sup>2</sup></button> </td>
    `
    container.appendChild(tr);
}