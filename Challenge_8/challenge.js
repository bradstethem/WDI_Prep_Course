// Excercise #1

for(var i = 1; i <= 100; i++){
    console.log(i);
}

// Excercise #2

var s = "#";
while(s.length < 8){
    console.log(s);
    s = s + "#";
}

// Excercise #3

for(var i = 1; i <= 100; i++){
    if (i % 5 == 0 && i % 3 == 0){
        console.log("fizzbuzz");
    }
    else if (i % 5 == 0){
        console.log("fizz");
    }
    else if (i % 3 == 0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}

// Excercise #4

var board = "";
for(var i = 1; i <=72; i++){
    if(i % 9 == 0){
        board = board + "\n";
    }
    else if (i % 2 == 0){
        board = board + " ";
    }
    else {
        board = board + "#";
    }
}
console.log(board);
