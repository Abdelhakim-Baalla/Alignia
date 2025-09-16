// Fonction pour générer les grilles de jeu
function createGrid(n) {
  const grid = [];
  let grille = document.getElementById("grille");
  grille.innerHTML = "";
  for (let i = 0; i < n; i++) {
    grid[i] = [];

    for (let j = 0; j < n; j++) {
      grid[i][j] =
        '<div style="border: 1px solid black; width: 50px; height: 50px; display: inline-block; text-align: center;"></div>';

      grille.innerHTML += grid[i][j];
    }
    grille.style.gridTemplateColumns = `repeat(${n}, 50px)`;
  }
  // return grid;
}

// createGrid();

function changerTaille() {
  let NewTaille = document.getElementById("taille").value;
  n = parseInt(NewTaille);
  createGrid(n);
  // console.log(NewTaille);
}

let appliqueBtn = document.getElementById('appliquer');
appliqueBtn.addEventListener('click', changerTaille);
