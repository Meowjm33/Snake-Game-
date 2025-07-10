
const container = document.getElementById("gamecontainer")
const gridsize = 20 ///aauta grid ko size 20 huncha
const containerSize = 400 //container ko size 400

let snake = [{x:200,y:200}] // snake center ma bascha
let direction = {x:0, y:0}  //snake ko direction control garna ko lagi
let food = generateFood()

let gameInterval = setInterval(gameloop,150) //snake ko movement 150ms ko pace le update garcha

document.addEventListener('keydown', changeDirection) //aauta key down garesi chalna start garcha snake
function changeDirection(e) // here, e=event
{
    if(e.key == 'ArrowUp' && direction.y == 0){
        direction = {x:0,y:-gridsize}
        //here x:0 bhaneko vertically matra direction change aaucha ani y -ve bhaye pani gridsize 1 le badhaucha
    }

}