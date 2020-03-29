
exports.willCollide = function (mass1, mass2) {
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


exports.doCollide = function (mass1, mass2) {
    const vcmx = (mass1.vx*mass1.mass + mass2.vx*mass2.mass )/(mass1.mass+mass2.mass)
    const vcmy = (mass1.vy*mass1.mass + mass2.vy*mass2.mass )/(mass1.mass+mass2.mass)

    const v1 = {vx: 2*vcmx - mass1.vx, vy: 2*vcmy - mass1.vy}
    const v2 = {vx: 2*vcmx - mass2.vx, vy: 2*vcmy - mass2.vy}
    return [v1, v2]
}
