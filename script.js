//creating a object about a roller dice
let dice = {
    total_sides : 6,
    roll:function(){//method
        let randomNumber = Math.floor(Math.random()*this.total_sides+1)
        return randomNumber
    }
}

let button = document.getElementById('button');

button.onclick = function(){
    document.getElementById("diceholder").innerHTML = dice.roll();//result = any random number from 1-6
}