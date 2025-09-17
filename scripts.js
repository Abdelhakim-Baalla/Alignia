// Les joueurs
let X = "X";
let O = "O";
let n = 3;
let k = 3;
let currentPlayer = X;
let countStepsX = 0;
let countStepsO = 0;
let gameOver = false;
let xScore = 0;
let oScore = 0;

// Initialisation des scores avec affichage depuis LocalStorage
if (localStorage.getItem('xScore')) {
    xScore = parseInt(localStorage.getItem('xScore'));
    document.getElementById('X-score').textContent= xScore;
}else{
    localStorage.setItem('xScore', xScore);
    document.getElementById('X-score').textContent= xScore;
}

if (localStorage.getItem('oScore')) {
    oScore = parseInt(localStorage.getItem('oScore'));
    document.getElementById('O-score').textContent= oScore;
}else{
    localStorage.setItem('oScore', oScore);
    document.getElementById('O-score').textContent= oScore;
}



// Fonction pour générer les grilles de jeu
function createGrid(n) {
  let grille = document.getElementById("grille");
  grille.innerHTML = "";
  grille.style.gridTemplateColumns = `repeat(${n}, 50px)`;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      grille.innerHTML +=
        '<div style="border: 1px solid black; width: 50px; height: 50px;" class="box-player"></div>';
    }
  }
}

createGrid(n);

function changerTaille() {
  let NewTailleStr = document.getElementById("taille").value;
  let kStr = document.getElementById("nbr-lignes-a-gagner").value;

  let NewTaille = parseInt(NewTailleStr);
  let newK = parseInt(kStr);

  if (isNaN(NewTaille) || NewTaille < 1) {
    alert("La taille de la grille doit être un entier positif.");
    return;
  }
  if (isNaN(newK) || newK < 1) {
    alert("Le nombre de lignes à gagner doit être un entier positif.");
    return;
  }
  if (newK > NewTaille) {
    alert(
      "Le nombre de lignes à gagner ne peut pas être supérieur à la taille de la grille."
    );
    newK = NewTaille;
    document.getElementById("nbr-lignes-a-gagner").value = NewTaille;
  }

  n = NewTaille;
  k = newK;
  countStepsX = 0;
  countStepsO = 0;
  gameOver = false;
  currentPlayer = X;

  createGrid(n);
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

      if (checkWin()) {
        return;
      }

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
  }
});

function checkWin() {
  let boxes = document.getElementsByClassName("box-player");
  let grid = [];

  for (let i = 0; i < n; i++) {
    grid[i] = [];
    for (let j = 0; j < n; j++) {
      grid[i][j] = boxes[i * n + j].textContent;
    }
  }

  // Fonction pour vérifier k symboles alignés pour un joueur
  function hasKInRow(player) {
    // horizontales
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= n - k; j++) {
        let count = 0;
        for (let d = 0; d < k; d++) {
          if (grid[i][j + d] === player) {
            count++;
          }
        }
        if (count === k) return true;
      }
    }

    // verticales
    for (let j = 0; j < n; j++) {
      for (let i = 0; i <= n - k; i++) {
        let count = 0;
        for (let d = 0; d < k; d++) {
          if (grid[i + d][j] === player) {
            count++;
          }
        }
        if (count === k) return true;
      }
    }

    // diagonales (haut gauche vers bas droite)
    for (let i = 0; i <= n - k; i++) {
      for (let j = 0; j <= n - k; j++) {
        let count = 0;
        for (let d = 0; d < k; d++) {
          if (grid[i + d][j + d] === player) {
            count++;
          }
        }
        if (count === k) return true;
      }
    }

    // Vérification des diagonales (bas gauche vers haut droite)
    for (let i = k - 1; i < n; i++) {
      for (let j = 0; j <= n - k; j++) {
        let count = 0;
        for (let d = 0; d < k; d++) {
          if (grid[i - d][j + d] === player) {
            count++;
          }
        }
        if (count === k) return true;
      }
    }

    return false;
  }

  if (hasKInRow(X)) {
    gameOver = true;
    xScore++;
    document.getElementById('X-score').textContent = xScore;;
    alert("X a gagné !");
    return true;
  }
  if (hasKInRow(O)) {
    gameOver = true;
    oScore++;
    document.getElementById('O-score').textContent = oScore;
    alert("O a gagné !");
    return true;
  }
  return false;
}
