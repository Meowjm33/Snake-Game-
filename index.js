
const container = document.getElementById("gamecontainer")
const gridsize = 20 ///aauta grid ko size 20 huncha
const containerSize = 400 //container ko size 400

let snake = [{x:200,y:200}] // snake center ma bascha
let direction = {x:0, y:0}  //snake ko direction control garna ko lagi
let food = generateFood()

let gameInterval = setInterval(gameloop,150) //snake ko movement 150ms ko pace le update garcha ani gameloop ma tiyo update rakhcha

document.addEventListener('keydown', changeDirection) //aauta key down garesi chalna start garcha snake
function changeDirection(e) // here, e=event
{
    if(e.key == 'ArrowUp' && direction.y == 0){
        direction = {x:0,y:-gridsize}
        //here x:0 bhaneko vertically matra direction change aaucha ani y -ve bhaye pani gridsize 1 le increase huncha
    }
    else if(e.key== 'ArrowDown' && direction.y == 0){
        direction = {x:0,y:gridsize}
        //here y ma kei sign chaina (i.e y=+ve) then gridsize 1 le decrease huncha
    }
    else if(e.key == 'ArrowLeft' && direction.x == 0){
        direction = {x:-gridsize,y:0}
    }
    else if(e.key == 'ArrowRight'&& direction.x == 0){
        direction = {x:gridsize,y:0}
    }

}
function gameloop(){
    const head ={x:snake[0].x+direction.x , y:snake[0].y+direction.y}
    //here, x: means x cooridnate 
    // snake[0].x bhaneko snake ko head ko position in x (current) coordinate
    //direction.x bhaneko snake ko head ahile kun (current) direction ma cha
    //yo position ra direction of addition bhako cha same for y coordinate
    if(head.x<0 || head.x>=containerSize || head.y<0 || head.y>= containerSize)
    {
        alert("Game Over")
        clearInterval(gameInterval)
        return
    }
    snake.unshift(head)
    //here unshift is a inbuilt fn that shifts the direction of array segment (here,snake is a array)
    if(head.x == food.x && head.y == food.y){
        food=generateFood()
        //food bhaye pachi naya food generate garcha
    }
    else{
        snake.pop()
        //snake le food nakhaye samma new food generate hudaina(meaning kehi pani hudaina)
    }
}
function draw() // yo function le snake le food khaye pachi segment badhaune kaam garcha
{
    container.innerHTML ='' //'' -> empty
    snake.forEach(segment =>{
        const snakePart = document.createElement
    })
        const SnakePart = document.createElement("div")
        snakePart.classList.add('snake')
        //mathi ko 2 ota line ko code le dynamically snake bhanne div class banaucha
        snakePart.style.left = segment.x + "px"
        snakePart.style.top = segment.y + "px"
        container.appendChild(snakePart)
    }

