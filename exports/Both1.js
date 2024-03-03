function addx (a, b) {
    return a+b;
}

function subsx (a, b) {
    return a-b;
}

function mulx (a, b) {
    return a*b;
}

function divx (a, b) {
    return (b === 0) ? 'infinite' : a/b; 
}

function sqrtx(a) {
    return a*a;
}

function cubex(a) {
    return sqrtx(a)*a;
}

export {addx as default, subsx, mulx, divx, sqrtx, cubex};