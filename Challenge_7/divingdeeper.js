//magic eightball

var numberofreplys = 3;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);

    switch(choice){
        case 1:
            reply = "Signs point to yes";
            break;
        case 2:
            reply = "Reply hazy try again";
            break;
        case 3:
            reply = "Don't count on it";
            break;
        default:
            reply = "That was unexpected";
    }

    console.log(reply);
    console.log(choice);
}

ask();