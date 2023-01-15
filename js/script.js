let insulte = ["arrete", "je t'ai dit d'arreter", "arrete ça devient lourd", "c'est la dernière fois"];
const button = document.getElementById("boutonmechant");
const general = document.getElementById("endroit");
const fight = document.getElementById("fight");
let conteur = 0;
const maxList = insulte.length;

const enervement = () => {
    if(conteur === maxList){
        button.style.display = 'none';
        fight.style.display = 'block';
        conteur = 0;
    } else {
        button.innerHTML = insulte[conteur];
        conteur += 1;
    }
};

general.addEventListener('click', enervement)

const visage = document.getElementById("visage")
const  hp1 = document.getElementById("hp1")
const  hp2 = document.getElementById("hp2")
const  hp3 = document.getElementById("hp3")
const jenaimarre = document.getElementById('jenaimarre')
let clickcount = 0;
let monclick = 0;
let audio = new Audio("image/Coup_depee.mp3")

visage.addEventListener('click', () => {
    if (monclick==0) {
    hp3.style.display = 'none'
    audio.play()
    }
    
    if (monclick==1) {
    hp2.style.display = 'none'
    audio.play()
    }
    if (monclick==2) {
   
    hp1.style.display = 'none'
    audio.play()
    }
    monclick = monclick + 1
    if (monclick==3)
    visage.style.display = 'none'
})