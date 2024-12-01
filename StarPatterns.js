function printInversePyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let row = ' '.repeat(rows - i) + '*'.repeat(2 * i - 1);
        console.log(row);
    }
}

function printInverseRightAngleTriangle(rows) {
    for (let i = rows; i >= 1; i--) {
        console.log('*'.repeat(i));
    }
}

function printInverseSquare(rows) {
    for (let i = 0; i < rows; i++) {
        console.log('*'.repeat(rows));
    }
}

function printInverseHollowSquare(rows) {
    for (let i = 0; i < rows; i++) {
        if (i === 0 || i === rows - 1) {
            console.log('*'.repeat(rows));  
        } else {
            console.log('*' + ' '.repeat(rows - 2) + '*'); 
        }
    }
}

function generatePattern(rows){
    printInversePyramid(rows)
    printInverseRightAngleTriangle(rows)
    printInverseSquare(rows)
    printInverseHollowSquare(rows)
}
const rows = 5;
generatePattern(rows);