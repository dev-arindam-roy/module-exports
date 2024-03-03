function add2 (a, b) {
    return a+b;
}

function subs2 (a, b) {
    return a-b;
}

function mul2 (a, b) {
    return a*b;
}

function div2 (a, b) {
    return (b === 0) ? 'infinite' : a/b; 
}

function sqrt2(a) {
    return a*a;
}

function cube2(a) {
    return sqrt2(a)*a;
}

export {add2, subs2, mul2, div2, sqrt2, cube2};