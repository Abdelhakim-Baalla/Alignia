// Définir la variable n pour l'initialisation de la longueur et la largeur des grilles
let n = 3;

// Fonction pour générer les grilles de jeu
function createGrid(){
    const grid = [];
    let grille = document.getElementById("grille");
    for(let i = 0; i < n; i++){
        grid[i] = [];

        for(let j = 0; j < n; j++){
            grid[i][j] = '<div style="border: 1px solid black; width: 50px; height: 50px; display: inline-block; text-align: center;">0</div>';
            if(j == n - 1) grid[i][j] += '<br>';
            grille.innerHTML += grid[i][j];
        }
    }
    // return grid;
}

createGrid();