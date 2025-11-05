export type Pair = {
    x: number;
    y: number;
}

export const multiply = (one: Pair, two: Pair):Pair => {
    var x = (one.x * two.x) - (one.y * two.y);
    var y = (one.x * two.y) + (one.y * two.x);
    return {x,y}
}

export const addition = (one: Pair, two: Pair):Pair => {
    var x = (one.x + two.x)
    var y = (one.y + two.y)
    return {x,y}
}

export const division = (one: Pair, two: Pair):Pair => {
    var x = Math.trunc(one.x / two.x)
    var y = Math.trunc(one.y / two.y)
    return {x,y}
}

export const cycle =  (start: Pair, a: Pair): Pair =>{
    var current = start;
    console.log("currrent", current)
    current = multiply(current, current);
    console.log("after multiple", current)
    current = division(current, {x:10, y:10})

    current = addition(current, a)
    return current;
}

export const calculateOpCorner = (start: Pair): Pair =>{
    return addition(start, {x: 1000, y:1000})
}

export const shouldBeEngraved= (val: Pair): boolean =>{

    var total = {x: 0, y:0}
    for (var x=0; x< 100; x++){
        total = multiply(total, total);
        total = division(total, {x:100000,y:100000})
        total = addition(total, val)
        if (total.x > 1000000 || total.y> 1000000){
            console.log(x)
            return false;
        }
        if (total.x < -1000000 || total.y< -1000000){
                        console.log(x)
            return false;
        }
    }
    return true;
}

export const grid = (start: Pair, end: Pair): number=>{

    var step = (end.y - start.y)/ 100
    var stepx = (end.x - start.x)/ 100
    var count = 0;
    for (var y = start.y; y <= end.y; y=y+step){
        for (var x = start.x; x <= end.x; x=x+stepx){
            if (shouldBeEngraved({x, y})){
                count++;
            }
        }
    }   
    return count;
}

export const part3 = (start: Pair, end: Pair): number=>{

    var step = (end.y - start.y)/ 1000
    var stepx = (end.x - start.x)/ 1000
    var count = 0;
    for (var y = start.y; y <= end.y; y=y+step){
        for (var x = start.x; x <= end.x; x=x+stepx){
            if (shouldBeEngraved({x, y})){
                count++;
            }
        }
    }   
    return count;
}