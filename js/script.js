let try_btn = document.getElementById('try');
let reset_btn = document.getElementById('reset');
let output = document.getElementById('feedback');
let msg1 = document.getElementById('msg1');
let msg2 = document.getElementById('msg2');

let number = Math.floor(Math.random()*100); 
let no_of_guesses = 0;
guessed_nums = [];

try_btn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    if (input < 1 || input > 100) {
        alert("Please Enter a Number betwwen 1 and 99")
    }else{
        guessed_nums.push(input);
        no_of_guesses += 1;
        
        if (input == number){
            output.innerHTML = "You guessed right";
            msg1.textContent = "The Number was: " +  `${number}`;
            msg2.textContent = "You've guessed it in: " + no_of_guesses + " " + "guesses";

            document.getElementById('try').disabled = true;
        }else if (input < number){
            output.innerHTML = "You guessed low, Try again";
            msg1.textContent = "Number of guesses: " + no_of_guesses;
            msg2.textContent = "You've guessed number: " + guessed_nums;
        }
        if(input > number){
            output.innerHTML = "You guessed high, Keep trying";
            msg1.textContent = "Number of guesses: " + no_of_guesses;
            msg2.textContent = "You've guessed number: " + guessed_nums;
        }else if (input == ""){
            output.innerHTML = "Enter a number between 0 and 99"
        }
        if (isNaN(input)){
            output.innerHTML = "Enter a Number"
        }
    }
})
    

reset_btn.addEventListener('click', function(){
    let input = document.getElementById('input').value = "";
    
})