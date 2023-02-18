function calculateTriangleArea() {
    const input1Value = parseFloat(document.getElementById("triangle-field-b").value);
    const input2Value = parseFloat(document.getElementById("triangle-field-h").value);
  
    if (isNaN(input1Value) || isNaN(input2Value)) {
      alert("Invalid input! Please enter a valid number.");
      return;
    }
  
    document.getElementById("triangle-b").innerText = input1Value;
    document.getElementById("triangle-h").innerText = input2Value;
    const mainName = document.getElementById("triangle-name").innerText;
  
    const total = 0.5 * input1Value * input2Value;
  
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${mainName}</td>
    <td>${total}</td>
    <td> <button class="btn-primary rounded-btn">convert to m<sup>2</sup></button> </td>
    `
    container.appendChild(tr);
  }
  
document.getElementById('triangle-btn').addEventListener("click", calculateTriangleArea);
  