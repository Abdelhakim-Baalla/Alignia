// Définir la variable n pour l'initialisation de la longueur et la largeur des grilles
let n = 5;

// Fonction pour générer les grilles de jeu
function createGrid(){
    const grid = [];
    for(let i = 0; i < n; i++){
        grid[i] = [];

        for(let j = 0; j < n; j++){
            grid[i][j] = '<span>0</span>';
            if(j == n - 1) grid[i][j] += '<br>';
        }
    }
    return grid;
}

document.write(createGrid());