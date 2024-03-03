function add3 (a, b) {
    return a+b;
}

function subs3 (a, b) {
    return a-b;
}

function mul3 (a, b) {
    return a*b;
}

function div3 (a, b) {
    return (b === 0) ? 'infinite' : a/b; 
}

function sqrt3(a) {
    return a*a;
}

function cube3(a) {
    return sqrt3(a)*a;
}

export {add3 as sum, subs3 as minus, mul3 as multi, cube3};