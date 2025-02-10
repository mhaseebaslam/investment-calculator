function calculate() {
  const initial = Number(document.getElementById("initial").value);
  const month = Number(document.getElementById("month").value);
  const year = Number(document.getElementById("year").value);
  const rate = Number(document.getElementById("rate").value) / 100;

  let result = document.getElementById("result");
  result.innerHTML = "";

  let investment = initial;
  let totalContributions = initial;

  // Create a loop that runs for the number of years specified by the user.
  for (let i = 0; i < year; i++) {
    if (i > 0) {
      investment = (investment + month * 12) * (1 + rate);
      totalContributions = totalContributions + month * 12;
    }

    // Create a new row in the table.
    const row = result.insertRow();

    // Insert a cell in the row for each column.
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    // Set the text content of each cell to the corresponding value.
    cell1.textContent = `Year ${i}`;
    cell2.textContent = investment;
    cell3.textContent = totalContributions;
  }
}
