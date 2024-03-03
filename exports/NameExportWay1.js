export function add1 (a, b) {
    return a+b;
}

export function subs1 (a, b) {
    return a-b;
}

export function mul1 (a, b) {
    return a*b;
}

export function div1 (a, b) {
    return (b === 0) ? 'infinite' : a/b; 
}

export function sqrt1(a) {
    return a*a;
}

export function cube1(a) {
    return sqrt1(a)*a;
}