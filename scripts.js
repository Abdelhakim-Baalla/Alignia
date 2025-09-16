// Les joueurs
let X = "X";
let O = "O";
let n = 3;
let currentPlayer = X;

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
  let k = document.getElementById("nbr-lignes-a-gagner").value;
  n = parseInt(NewTaille);

  createGrid(n);
  // console.log(NewTaille);
}

let appliqueBtn = document.getElementById("appliquer");
appliqueBtn.addEventListener("click", changerTaille);

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("box-player")) {
    if (event.target.textContent === "") {
      event.target.textContent = currentPlayer;
      if (currentPlayer === X) {
        event.target.style.color = "blue";
      }
      if (currentPlayer === O) {
        event.target.style.color = "red";
      }

      event.target.style.backgroundColor = "#e0e0e0";

      if (currentPlayer === X) {
        currentPlayer = O;
      } else {
        currentPlayer = X;
      }
    }
    //   console.log(event.target.classList);
  }
});
