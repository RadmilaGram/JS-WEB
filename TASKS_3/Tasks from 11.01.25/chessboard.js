const chessboardContainer = document.querySelector("#chessboard");
const table = document.createElement("table");

for (let row = 0; row < 8; row++) {
  const tr = document.createElement("tr");
  for (let col = 0; col < 8; col++) {
    const td = document.createElement("td");
    td.style.backgroundColor = (row + col) % 2 === 0 ? "white" : "black";
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

chessboardContainer.appendChild(table);
