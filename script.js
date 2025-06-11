function createCursorGrid() {
    const grid = document.getElementById('cursorGrid');
    const squares = [];
    
    // Create grid squares
    for (let i = 0; i < 2500; i++) { // 50x50 grid
    const square = document.createElement('div');
    square.className = 'grid-square';
    grid.appendChild(square);
    squares.push(square);
    }
    
    // Mouse movement handler
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Calculate grid position
    const gridX = Math.floor(mouseX / (window.innerWidth / 50));
    const gridY = Math.floor(mouseY / (window.innerHeight / 50));
    
    // Light up squares around cursor
    squares.forEach((square, index) => {
        const squareX = index % 50;
        const squareY = Math.floor(index / 50);
        
        const distance = Math.sqrt(
        Math.pow(squareX - gridX, 2) + Math.pow(squareY - gridY, 2)
        );
        
        if (distance <= 2) {
        square.classList.add('glow');
        setTimeout(() => {
            square.classList.remove('glow');
        }, 150);
        }
    });
    });
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 2 + 's';
    star.style.animationDuration = (Math.random() * 3 + 1) + 's';
    starsContainer.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createCursorGrid();
});