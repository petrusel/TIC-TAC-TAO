function winner(arr) {  
  if (arr[0] != '') {
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] !== arr[0]) { 
        return false;
      }
    }
    return true;
  }
  return false;
}

let index = 0;
let haveWinner = 0;
function addItem(id) {
  if (index % 2 == 0 && haveWinner == 0) {
    document.getElementById("" + id).innerHTML = 'X';
  } else if (haveWinner == 0) {
    document.getElementById("" + id).innerHTML = 'O';
  }
  ++index;
  const table = document.getElementsByTagName('table')[0];
  let arrTable = [];
  let arrLine = [];
  let arrCol = [];
  let mainDiag = [];
  let secDiag = [];
  for (let i = 0; i < table.rows.length; ++i) {
    for (let j = 0; j < table.rows.length; ++j) {
      arrLine[j] = table.rows[i].cells[j].innerHTML;
      arrCol[j] = table.rows[j].cells[i].innerHTML;
      if (i == j) {
        mainDiag[j] = table.rows[i].cells[j].innerHTML;
      }
      if (i + j == table.rows.length - 1) {
        secDiag[j] = table.rows[i].cells[j].innerHTML;
      }
    }
    arrTable.push(new Array(...arrLine));
    arrTable.push(new Array(...arrCol));
  }
  arrTable.push(new Array(...mainDiag));
  arrTable.push(new Array(...secDiag));
  for (let i = 0; i < arrTable.length; ++i) {
    if (winner(arrTable[i])) {
      haveWinner = 1;
      document.getElementById("id_status").innerHTML = `<b style="color:red">CASTIGATOR "` + arrTable[i][0] + `"</b>`;
      return;
    } else if (index == 9 && haveWinner == 0) {
      document.getElementById("id_status").innerHTML = `<b style="color:green"> ~ REMIZA ~</b>`;
      return;
    }
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
