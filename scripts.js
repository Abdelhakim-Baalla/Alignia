// Les joueurs
let X = "X";
let O = "O";
let n = 3;
let k = 3;
let currentPlayer = X;
let countStepsX = 0;
let countStepsO = 0;

// Fonction pour générer les grilles de jeu
function createGrid(n) {
  const grid = [];
  let grille = document.getElementById("grille");
  grille.innerHTML = "";
  for (let i = 0; i < n; i++) {
    grid[i] = [];

    for (let j = 0; j < n; j++) {
      grid[i][j] =
        '<div style="border: 1px solid black; width: 50px; height: 50px; display: inline-block; text-align: center;" class="box-player"></div>';

      grille.innerHTML += grid[i][j];
    }
    grille.style.gridTemplateColumns = `repeat(${n}, 50px)`;
  }
  // return grid;
}

// createGrid();

function changerTaille() {
  let NewTaille = document.getElementById("taille").value;
  k = document.getElementById("nbr-lignes-a-gagner").value;
  if (k > NewTaille) {
    alert(
      "Le nombre de lignes à gagner ne peut pas être supérieur à la taille de la grille."
    );
    document.getElementById("nbr-lignes-a-gagner").value = NewTaille;
    k = NewTaille;
  } else {
    k = k;
  }

  n = parseInt(NewTaille);
  countStepsX = 0;
  countStepsO = 0;

  //   console.log(k);
  createGrid(n);
  // console.log(NewTaille);
}

let appliqueBtn = document.getElementById("appliquer");
appliqueBtn.addEventListener("click", changerTaille);

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("box-player")) {
    //   console.log(k);
    if (event.target.textContent === "") {
      event.target.textContent = currentPlayer;

      if (currentPlayer === X) {
        countStepsX++;
        event.target.style.color = "blue";
      }
      if (currentPlayer === O) {
        countStepsO++;
        event.target.style.color = "red";
      }

      event.target.style.backgroundColor = "#e0e0e0";
      //   console.log("X steps: " + countStepsX);
      //   console.log("O steps: " + countStepsO);
      if (countStepsX == k || countStepsO == k) {
        checkWin();
        console.log("Game Over");
      }

      if (currentPlayer === X) {
        currentPlayer = O;
      } else {
        currentPlayer = X;
      }
    }

    if (countStepsO + countStepsX == n * n && checkWin() != true) {
        alert("Match nul!");
    }
    //   console.log(event.target.classList);
  }
});

function checkWin() {
  // console.log("check win" + k);
return true
}
