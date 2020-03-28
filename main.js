const vector = []

const obj1 = { pnt: { x: 0, y: 2}, vx:  1, vy: -1, mass: 1 }
const obj2 = { pnt: { x: 2, y: 0}, vx: -1, vy:  1, mass: 1 }

vector.push( obj1 )
vector.push( obj2 )
const len = vector.length

const collision = []

for ( let i = 0; i < len; i++) {
    const mass1 = vector[i];
    for (let j = i+1; j < len; j++) {
        const mass2 = vector[j];
            if (willCollide(mass1, mass2)) {
                collision.push( [i,j] )                
            }
    }
}

function willCollide (mass1, mass2) {
    const vector1 = {
        nx: mass2.vx - mass1.vx,
        ny: mass2.vy - mass1.vy,
    }
    const vector2 = {
        nx: mass2.pnt.x - mass1.pnt.x,
        ny: mass2.pnt.y - mass1.pnt.y,
    }
    
    return isParallel (vector1, vector2)
}

function isParallel (vector1, vector2) {
    return (vector1.nx*vector2.ny - vector1.nx*vector2.ny < 1e-3) 
}

console.log(collision);


function doCollide (i, j) {
    const mass1 = vector[i]
    const mass2 = vector[j]
    const vcmx = (mass1.vx*mass1.mass + mass2.vx*mass2.mass )/(mass1.mass+mass2.mass)
    const vcmy = (mass1.vy*mass1.mass + mass2.vy*mass2.mass )/(mass1.mass+mass2.mass)

    vector[i].vx = 2*vcmx - mass1.vx
    vector[j].vx = 2*vcmx - mass2.vx
    vector[i].vy = 2*vcmy - mass1.vy
    vector[j].vy = 2*vcmy - mass2.vy 
}

console.log(vector);

collision.map(elem => {
    doCollide(elem[0], elem[1])
})

console.log(vector);
