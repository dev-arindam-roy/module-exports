export function addy (a, b) {
    return a+b;
}

export function subsy (a, b) {
    return a-b;
}

export function muly (a, b) {
    return a*b;
}

export function divy (a, b) {
    return (b === 0) ? 'infinite' : a/b; 
}

export function sqrty(a) {
    return a*a;
}

export function cubey(a) {
    return sqrty(a)*a;
}

export default addy;