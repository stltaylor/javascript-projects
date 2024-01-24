function makeLine(size) {
    let line = ''
    i = 0
    while (i < size) {
        line = line.replace('',"#") 
        i++
    }
    return line
}
console.log(makeLine(5));






function makeRectangle(width,height) {
    let line = '';
    let shape = '';
    let i = 0;
    let j = 0;
    while (i < width) {
        line += '#';
        i++;
    }
        while (j < height) {
            shape += line + '\n';
            j++;
        }
    return shape;
} 
console.log(makeRectangle(5,3));

function makeSquare(size) {
    // let line = '';
    // let shape = '';
    // i = 0;
    // j = 0;
    // while (i < size) {
    //     line = line.replace('','#')
    //     i++
    // }
    //         while (j < size) {
    //             shape += line + '\n'
    //             j++
    //         }
    // return shape
    return makeRectangle(size,size)
}

console.log(makeSquare(5))

// function makeRectangle(width, height) {
//     let rectangle = '';
//     for (let i = 0; i < height; i++) {
//       rectangle += (makeLine(width) + '\n');
//     }
//     return rectangle.slice(0, -1);
//   }

function makeTriangle(size) {
    let triangle = '';
    for (let i = 0; i < size; i++) {
        triangle += (makeLine(i+1) + '\n')
}    return triangle;

}
console.log(makeTriangle(4))

function makeSpaceLine(numSpaces, numChars) {
    let space = '';
    for (let i = 0; i < numSpaces; i++) {
        space += ' '
    }
    return space + makeLine(numChars) + space;
}

console.log(makeSpaceLine(5,5))

function makeIsoscelesTriangle(height) {
    let isos = '';
    for (let i = 0; i < height; i++) {
        isos += makeSpaceLine(height - i - 1, 2 * i + 1) + '\n'
    }
    return isos;
}

console.log(makeIsoscelesTriangle(7));


function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeDiamond(height) {
    let top = makeIsoscelesTriangle(height)
    let bottom = reverse(top)
    let diamond = top.slice(0,-1) + bottom
    return diamond.slice(0,-1)
}

console.log(makeDiamond(10))