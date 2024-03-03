# ES6 Export & Import
### Get knowledge on js export & import

## Example-1
```javascript
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
```

## Example-2
```javascript
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
```

## Example-3
```javascript
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
```

## Example-3
```javascript
export default function sum (a, b) {
    return a+b;
}
```

## Example-4
```javascript
export default function (a) {
    return GetSqrtx(a)*a;
}

function GetSqrtx(a) {
    return a*a;
}
```
## Example-5
```javascript
function GetCube4(a) {
    return GetSqrt4(a)*a;
}

function GetSqrt4(a) {
    return a*a;
}

export {GetCube4 as default};
```

## Example-6
```javascript
function GetCube3(a) {
    return GetSqrt3(a)*a;
}

function GetSqrt3(a) {
    return a*a;
}

export default GetCube3
```

## Example-7
```javascript
export default function GetCube2 (a) {
    return GetSqrt2(a)*a;
}

function GetSqrt2(a) {
    return a*a;
}
```

## Example-8
```javascript
export default function GetCube (a) {
    return GetSqrt(a)*a;
}

function GetSqrt(a) {
    return a*a;
}
```

## Example-9
```javascript
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
```

## Example-10
```javascript
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
```
## Example-11
```javascript
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
```

## Import calls:
```javascript
    <script type="module">
        import {add1, subs1, mul1, div1, sqrt1, cube1} from './exports/NameExportWay1.js'
        console.log("Way1::Addition =", add1(1,2));
        console.log("Way1::Substraction =", subs1(1,2));
        console.log("Way1::Multipication =", mul1(1,2));
        console.log("Way1::Division =", div1(1,2));
        console.log("Way1::Squre =", sqrt1(2));
        console.log("Way1::Cube =", cube1(3));
        console.log("Way1::0 Division =", div1(3, 0));
    </script>

    <script type="module">
        import {add2, subs2, mul2, div2, sqrt2, cube2} from './exports/NameExportWay2.js';
        console.log("Way2::Addition =", add2(1,2));
        console.log("Way2::Substraction =", subs2(1,2));
        console.log("Way2::Multipication =", mul2(1,2));
        console.log("Way2::Division =", div2(1,2));
        console.log("Way2::Squre =", sqrt2(2));
        console.log("Way2::Cube =", cube2(3));
        console.log("Way2::0 Division =", div2(3, 0));
    </script>

    <script type="module">
        import {add1 as addition, sqrt1 as squre} from './exports/NameExportWay1.js';
        import {mul2 as multipication, div2 as division} from './exports/NameExportWay2.js';
        console.log("ImportAs::Addition =", addition(1,2));
        console.log("ImportAs::Squre =", squre(2));
        console.log("ImportAs::Multipication =", multipication(1,2));
        console.log("ImportAs::Division =", division(1,2));
    </script>

    <script type="module">
        import {sum, minus as biog, multi as gon} from './exports/NameExportWay3.js';
        console.log("Way3::Addition =", sum(1,2));
        console.log("Way3::Substraction =", biog(1,2));
        console.log("Way3::Multipication =", gon(1,2));
    </script>

    <script type="module">
        import * as obj1 from './exports/NameExportWay1.js';
        import * as obj2 from './exports/NameExportWay2.js';
        import * as obj3 from './exports/NameExportWay3.js';

        console.log("*Import-1", obj1.add1(4,5));
        console.log("*Import-2", obj2.mul2(4,5));
        console.log("*Import-3", obj3.cube3(4));
        console.log("*Import-3", obj3.sum(4,5));
        console.log("*Import-3", obj3.multi(4,5));
    </script>

    <script type="module">
        import sum from './exports/DefaultExportSum.js';
        console.log("Default Export - Way1 = ", sum(6,3));

        import GetCube from './exports/DefaultExportCube.js';
        console.log("Default Export - Way2 = ", GetCube(3));

        import anyName from './exports/DefaultExportDiffName.js';
        console.log("Default Export - Way3 = ", anyName(3));

        import cubeMe from './exports/DefaultExportNoName.js';
        console.log("Default Export - Way4 = ", cubeMe(3));

        import GetCube3 from './exports/DefaultExportLast.js';
        console.log("Default Export - Way5 = ", GetCube3(3));

        import myCube from './exports/DefaultExportLast2.js';
        console.log("Default Export - Way6 = ", myCube(3));

    </script>

    <script type="module">
        import addx, {mulx, sqrtx as squreMe, cubex} from './exports/Both1.js';
        console.log("Both1-add = ", addx(2,3));
        console.log("Both1-squre = ", squreMe(3));
        console.log("Both1-cube = ", cubex(5));

        import sumIs, {muly, divy as vagMe} from './exports/Both2.js';
        console.log("Both2-sum = ", sumIs(2,3));
        console.log("Both2-mul = ", muly(3,4));
        console.log("Both2-div = ", vagMe(5,3));

        import anyDefaultName, {sqrtz as sq , mulz} from './exports/Both3.js';
        console.log("Both3-cube = ", anyDefaultName(2));
        console.log("Both3-squre = ", sq(4));
        console.log("Both3-mul = ", mulz(5,5));
    </script>

    <script type="module">
        import { moduleSum, moduleSubs, moduleMul, moduleDivi } from './modules/app.js';
        console.log("ModuleSum = ", moduleSum(2,2));
        console.log("moduleSubs = ", moduleSubs(2,2));
        console.log("moduleMul = ", moduleMul(2,2));
        console.log("moduleDivi = ", moduleDivi(2,2));
    </script>
```
