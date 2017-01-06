//magic eightball

var numberofreplys = 3;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

    /*
    write conditional logic here using if, else if, and else
    */
    if(choice==1){
        reply = "Signs point to yes";
    }
    else if(choice==2){
        reply = "Reply hazy try again";
    }
    else{
        reply = "Don't count on it";
    }

    console.log(reply);
    console.log(choice);
}

ask();