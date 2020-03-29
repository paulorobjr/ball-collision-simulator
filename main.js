// import willCollide from './physics'
// import 'functions.js'
const { willCollide, doCollide } = require('./physics')
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


console.log(collision);



console.log(vector);

collision.map(elem => {
    const i = elem[0]
    const j = elem[1]
    const masses = doCollide(vector[i], vector[j])
    vector[i].vx = masses[0].vx
    vector[i].vy = masses[0].vy
    vector[j].vx = masses[1].vx
    vector[j].vy = masses[1].vy
    // atualiza o vetor de colisoes
})

console.log(vector);
