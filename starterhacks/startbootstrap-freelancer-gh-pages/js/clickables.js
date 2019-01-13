window.onload = function firstFortune(){

    var selection;
    selection = Math.floor(Math.random() * 10 + 1);
    switch(selection){

        case 1:
            document.getElementById("fortune1").innerHTML = "You're the best, around. No one's ever gonna bring you down.";
        break;
        case 2:
            document.getElementById("fortune1").innerHTML = "The day is yours!";
        break;
        case 3:
            document.getElementById("fortune1").innerHTML = "Feeling down? It's okay to feel that way. Take a break and take 3 deep breaths.";
        break;
        case 4:
            document.getElementById("fortune1").innerHTML = "Need a listening ear? We're here for you.";
        break;
        case 5:
            document.getElementById("fortune1").innerHTML = "Give today your best, and tomorrow is a new day.";
        break;
        case 6:
            document.getElementById("fortune1").innerHTML = "Feeling burnt out? Take a step back and relax.";
        break;
        case 7:
        document.getElementById("fortune1").innerHTML = "Down for a walk or a stretch? Take a well-deserved 10 minute break.";
        break;
        case 8:
        document.getElementById("fortune1").innerHTML = "A bad day, week or even month is okay. We're here to support you, whenever you're ready.";
        break;
        case 9:
        document.getElementById("fortune1").innerHTML = "Keep on crushing it!";
        break;
        default:
            document.getElementById("fortune1").innerHTML = "It's okay to feel how you feel right now.";
        break;
        }
}
