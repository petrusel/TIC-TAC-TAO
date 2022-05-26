let index = 0;
function addItem(id) {
  if (index % 2 == 0) {
    document.getElementById("" + id).innerHTML = 'X';
  } else {
    document.getElementById("" + id).innerHTML = 'O';
  }
  ++index;
  const table = document.getElementsByTagName('table')[0];
  if (
    // X
    // lines
    (table.rows[0].cells[0].innerHTML == "X" && table.rows[0].cells[1].innerHTML == "X" && table.rows[0].cells[2].innerHTML == "X") ||
    (table.rows[1].cells[0].innerHTML == "X" && table.rows[1].cells[1].innerHTML == "X" && table.rows[1].cells[2].innerHTML == "X") ||
    (table.rows[2].cells[0].innerHTML == "X" && table.rows[2].cells[1].innerHTML == "X" && table.rows[2].cells[2].innerHTML == "X") ||
    // columns
    (table.rows[0].cells[0].innerHTML == "X" && table.rows[1].cells[0].innerHTML == "X" && table.rows[2].cells[0].innerHTML == "X") ||
    (table.rows[0].cells[1].innerHTML == "X" && table.rows[1].cells[1].innerHTML == "X" && table.rows[2].cells[1].innerHTML == "X") ||
    (table.rows[0].cells[2].innerHTML == "X" && table.rows[1].cells[2].innerHTML == "X" && table.rows[2].cells[2].innerHTML == "X") ||
    // main diagonal
    (table.rows[0].cells[0].innerHTML == "X" && table.rows[1].cells[1].innerHTML == "X" && table.rows[2].cells[2].innerHTML == "X") ||
    // secondary diagonal
    (table.rows[2].cells[0].innerHTML == "X" && table.rows[1].cells[1].innerHTML == "X" && table.rows[0].cells[2].innerHTML == "X")
    ) {
    document.getElementById("id_status").innerHTML = `<h3 style="color:red">CASTIGATOR X</h3>`;
  } else if (
    // O
    // lines
    (table.rows[0].cells[0].innerHTML == "O" && table.rows[0].cells[1].innerHTML == "O" && table.rows[0].cells[2].innerHTML == "O") ||
    (table.rows[1].cells[0].innerHTML == "O" && table.rows[1].cells[1].innerHTML == "O" && table.rows[1].cells[2].innerHTML == "O") || 
    (table.rows[2].cells[0].innerHTML == "O" && table.rows[2].cells[1].innerHTML == "O" && table.rows[2].cells[2].innerHTML == "O") ||
    // columns
    (table.rows[0].cells[0].innerHTML == "O" && table.rows[1].cells[0].innerHTML == "O" && table.rows[2].cells[0].innerHTML == "O") ||
    (table.rows[0].cells[1].innerHTML == "O" && table.rows[1].cells[1].innerHTML == "O" && table.rows[2].cells[1].innerHTML == "O") ||
    (table.rows[0].cells[2].innerHTML == "O" && table.rows[1].cells[2].innerHTML == "O" && table.rows[2].cells[2].innerHTML == "O") ||
    // main diagonal
    (table.rows[0].cells[0].innerHTML == "O" && table.rows[1].cells[1].innerHTML == "O" && table.rows[2].cells[2].innerHTML == "O") ||
    // secondary diagonal
    (table.rows[2].cells[0].innerHTML == "O" && table.rows[1].cells[1].innerHTML == "O" && table.rows[0].cells[2].innerHTML == "O")
    ) {
    document.getElementById("id_status").innerHTML = `<h3 style="color:blue">CASTIGATOR O</h3>`;
  } else if (index == 9) {
    document.getElementById("id_status").innerHTML = `<h3 style="color:green">~ REMIZA ~</h3>`;
  }
}

function startGame() {
  document.getElementById("id_add_div").innerHTML = `
  <h3>Jocul a inceput</h3>
  <div class="card-body text-center" >
    <table style="margin:0 auto;">
      <tr>
        <td id="00" onclick="addItem(this.id)"></td>
        <td id="01" onclick="addItem(this.id)"></td>
        <td id="02" onclick="addItem(this.id)"></td>
      </tr>
      <tr>
        <td id="10" onclick="addItem(this.id)"></td>
        <td id="11" onclick="addItem(this.id)"></td>
        <td id="12" onclick="addItem(this.id)"></td>
      </tr>
      <tr>
        <td id="20" onclick="addItem(this.id)"></td>
        <td id="21" onclick="addItem(this.id)"></td>
        <td id="22" onclick="addItem(this.id)"></td>
      </tr>
    </table>
  </div>
  <p id="id_status" style="color:grey"><i>STATUS</i></p>
  `;
}