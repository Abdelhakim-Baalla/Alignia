// Les joueurs
let X = "X";
let O = "O";
let n = 3;
let k = 3;
let currentPlayer = X;
let countStepsX = 0;
let countStepsO = 0;
let gameOver = false;

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
  n = NewTaille;
  countStepsX = 0;
  countStepsO = 0;
  gameOver = false;
  currentPlayer = X;
  createGrid(n);
  // console.log(NewTaille);
}

let appliqueBtn = document.getElementById("appliquer");
appliqueBtn.addEventListener("click", changerTaille);

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("box-player")) {
    if (gameOver) return;
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

      if (checkWin()) {
        return;
      }

      // Vérifier le match nul
      if (countStepsO + countStepsX === n * n) {
        alert("Match nul!");
        return;
      }

      if (currentPlayer === X) {
        currentPlayer = O;
      } else {
        currentPlayer = X;
      }
    }
    //   console.log(event.target.classList);
  }
});

// function checkWin() {
//   let boxes = document.getElementsByClassName("box-player");
//   let grid = [];
//   // Construction du tableau 2D représentant la grille
//   for (let i = 0; i < n; i++) {
//     grid[i] = [];
//     for (let j = 0; j < n; j++) {
//       grid[i][j] = boxes[i * n + j].textContent;
//     }
//   }

//   // Fonction pour vérifier k symboles alignés pour un joueur
//   function hasKInRow(player) {
//     // Vérification des lignes horizontales
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j <= n - k; j++) {
//         let count = 0;
//         for (let d = 0; d < k; d++) {
//           if (grid[i][j + d] === player) {
//             count++;
//           }
//         }
//         if (count === k) return true;
//       }
//     }

//     // Vérification des colonnes verticales
//     for (let j = 0; j < n; j++) {
//       for (let i = 0; i <= n - k; i++) {
//         let count = 0;
//         for (let d = 0; d < k; d++) {
//           if (grid[i + d][j] === player) {
//             count++;
//           }
//         }
//         if (count === k) return true;
//       }
//     }

//     // Vérification des diagonales (haut gauche vers bas droite)
//     for (let i = 0; i <= n - k; i++) {
//       for (let j = 0; j <= n - k; j++) {
//         let count = 0;
//         for (let d = 0; d < k; d++) {
//           if (grid[i + d][j + d] === player) {
//             count++;
//           }
//         }
//         if (count === k) return true;
//       }
//     }

//     // Vérification des diagonales (bas gauche vers haut droite)
//     for (let i = k - 1; i < n; i++) {
//       for (let j = 0; j <= n - k; j++) {
//         let count = 0;
//         for (let d = 0; d < k; d++) {
//           if (grid[i - d][j + d] === player) {
//             count++;
//           }
//         }
//         if (count === k) return true;
//       }
//     }

//     return false;
//   }

//   if (hasKInRow(X)) {
//     gameOver = true;
//     alert("X a gagné !");
//     return true;
//   }
//   if (hasKInRow(O)) {
//     gameOver = true;
//     alert("O a gagné !");
//     return true;
//   }
//   return false;
// }
