export function addz (a, b) {
    return a+b;
}

export function subsz (a, b) {
    return a-b;
}

export function mulz (a, b) {
    return a*b;
}

export function divz (a, b) {
    return (b === 0) ? 'infinite' : a/b; 
}

export function sqrtz(a) {
    return a*a;
}

export default function cubez(a) {
    return sqrtz(a)*a;
}