document.getElementById('bold').addEventListener('click', toggleBold);
document.getElementById('italic').addEventListener('click', toggleItalic);
document.getElementById('font-size').addEventListener('click', changeFontSize);
document.getElementById('sum').addEventListener('click', calculateSum);
document.getElementById('trim').addEventListener('click', trimText);


function toggleBold() {
    const selectedCells = document.querySelectorAll('.cell:focus');
    selectedCells.forEach(cell => {
        cell.style.fontWeight = cell.style.fontWeight === 'bold' ? 'normal' : 'bold';
    });
}


function toggleItalic() {
    const selectedCells = document.querySelectorAll('.cell:focus');
    selectedCells.forEach(cell => {
        cell.style.fontStyle = cell.style.fontStyle === 'italic' ? 'normal' : 'italic';
    });
}

function changeFontSize() {
    const selectedCells = document.querySelectorAll('.cell:focus');
    const newSize = prompt("Enter font size (e.g., 20px):");
    selectedCells.forEach(cell => {
        cell.style.fontSize = newSize;
    });
}


function calculateSum() {
    const selectedCells = document.querySelectorAll('.cell');
    let sum = 0;
    
    selectedCells.forEach(cell => {
        const value = parseFloat(cell.value);
        if (!isNaN(value)) {
            sum += value;
        }
    });

    alert("The sum is: " + sum);
}

function trimText() {
    const selectedCells = document.querySelectorAll('.cell:focus');
    selectedCells.forEach(cell => {
        cell.value = cell.value.trim();
    });
}
