let min = 1;
let max = 100;
let nombreMystere = Math.floor(Math.random() * max) + min;
let tentative = 0;
let essaismax = 10;
let winstreak = 0

// const text = document.getElementById("text");
const butt = document.getElementById("butt");
const repond = document.getElementById("repond");
// const indice = document.getElementById("indice");
// const essais = document.getElementById("essais");

let ligne = ["ligne0",ligne1, ligne2, ligne3, ligne4, ligne5, ligne6, ligne7, ligne8, ligne9, ligne10, ligne11, ligne12, ligne13, ligne14, ligne15, ligne16, ligne17]
let intro = ["X","Execution du programme [G.O.D]","Lancement du programme [G.O.D] - 0%","Lancement du programme [G.O.D] - 12%","Lancement du programme [G.O.D] - 34%","Lancement du programme [G.O.D] - 59%","Lancement du programme [G.O.D] - 69%","Lancement du programme [G.O.D] - 87%","Lancement du programme [G.O.D] - 99%","Lancement du programme [G.O.D] - TERMINÉ","Génération de [HÔTE] - TERMINÉ","Accès administrateur de [HÔTE] - TERMINÉ","Lancement de la [PAROLE] - EN COURS","Decryptage de la [PAROLE] - EN COURS","Decryptage de la [PAROLE] - EN COURS","Decryptage de la [PAROLE] - TERMINÉ","Chargement de l'interface - TERMINÉ","Finalisation..."]
let positionimg = ["X","0 0rem", "0 -3rem", "0 -6rem", "0 -9rem","0 -12rem", "0 -15rem", "0 -18rem", "0 -21rem","0 -24rem", "0 -27rem", "0 -30rem", "0 -33rem","0 -36rem", "0 -39rem", "0 -42rem", "0 -45rem"]
// ligne[8].style.backgroundPosition = positionimg[4] ;
// ligne[8].style.backgroundImage = "url(A-Lyx8.JPG)" ;
// ligne[8].style.backgroundSize = "50rem" ;

// ligne[9].style.backgroundPosition = positionimg[5] ;
// ligne[9].style.backgroundImage = "url(A-Lyx8.JPG)" ;
// ligne[9].style.backgroundSize = "50rem" ;

// ligne[2].innerHTML="Bienvenue au jeu de devinette de nombre !"
// ligne[4].innerHTML ="Il se trouve entre "+min+" & "+max
// butt.value=""


const allParagraphs = document.querySelectorAll("p");
let nb ="[X]"


for (let i = 1; i <= 17; ++i) {
    
    setTimeout(() => {
        ligne[i].innerHTML=intro[i]
        if(i===17){
            setTimeout(() => {
                allParagraphs.forEach((paragraph) => {
                    paragraph.innerHTML = "&lrm;";})
                ligne[1].innerHTML ="-----------------------------------------------------------------"
                ligne[2].innerHTML="Bienvenue au Game Of Devinette."
                ligne[4].innerHTML ="Pour interagir avec la machine, entrez les instructions entre"
                ligne[5].innerHTML ="[CROCHET] puis, appuyez sur le boutton."
                ligne[14].innerHTML ="[JOUER]"
                ligne[17].innerHTML ="-----------------------------------------------------------------"
                butt.addEventListener("click",function menu(){
    
                    const tonentre = repond.value.toUpperCase()
                        // alert(tonentre)
                        repond.value=""
                        if(tonentre === "JOUER"){
                            startgame()
                           
                            butt.removeEventListener("click",menu)
                        }
                    })
            }, 750);
        }
    }, i*80);
    
}




function startgame(){
    
ligne[2].innerHTML="Votre but est de deviner un nombre aléatoir."
ligne[3].innerHTML="Entrez votre proposition puis appuyez sur le bouton."
ligne[5].innerHTML ="Indice : Il se trouve entre ["+min+"] & ["+max+"]"
// ligne[16].innerHTML = "Nombre de tentative : "+tentative

ligne[14].innerHTML ="&lrm;"
ligne[4].innerHTML ="&lrm;"

butt.addEventListener("click",function(){

    
    let tonchoix = repond.value


    ++tentative
    ligne[15].innerHTML = nb
    nb = "[X]" +nb

    if (isNaN(tonchoix)) {
        ligne[2].innerHTML="Vous avez trouvé [" +winstreak+ "] nombres jusqu'ici."
        ligne[3].innerHTML="Jusqu'où pouvez vous aller ?"
        ligne[5].innerHTML="Indice : On cherche un >>>NOMBRE<<<"
    } 
    
    else if(tonchoix < nombreMystere){
        ligne[2].innerHTML="Vous avez trouvé [" +winstreak+ "] nombres jusqu'ici."
        ligne[3].innerHTML="Jusqu'où pouvez vous aller ?"
        ligne[5].innerHTML= "Indice : Trop petit"
    }

    else if(tonchoix > nombreMystere){
        ligne[2].innerHTML="Vous avez trouvé [" +winstreak+ "] nombres jusqu'ici."
        ligne[3].innerHTML="Jusqu'où pouvez vous aller ?"
        ligne[5].innerHTML="Indice : Trop grand"
    }

    //VICTOIRE//
    else {
        ligne[2].innerHTML="Vous avez trouvé en ["+ tentative +"] tentatives."
        ligne[3].innerHTML="Un nouveau nombre à été générer, trouvez le."
        ligne[5].innerHTML="&lrm;"
        nombreMystere = Math.floor(Math.random() * max) + min;
        winstreak = ++winstreak
        tentative=0
        essaismax =essaismax-2
        ligne[15].innerHTML = "&lrm;"
        nb="[X]"
        allParagraphs.forEach((paragraph) => {
            paragraph.style.color="greenyellow";})
    }
        
        // ligne[16].innerHTML = "Nombre d'essais : "+tentative
        // ligne[14].innerHTML = essaismax
        
        //DERNIER CHANCE//
        if (tentative>=essaismax-1) {
            allParagraphs.forEach((paragraph) => {
                paragraph.style.color="red";})
            ligne[2].innerHTML="Vous avez un nombre limitée de tentative."
            ligne[3].innerHTML="Ceci est votre dernière chance."
        }

        //GAME OVER?//
        if(tentative>=essaismax){repond.style.pointerEvents="none"
            butt.style.pointerEvents="none"
            repond.value=""
            allParagraphs.forEach((paragraph) => {
            paragraph.innerHTML = `&lrm;`;})

            //TRUE ENDING//
            if(winstreak>=5){
                ligne[1].innerHTML="GG"
            }
        }
});

};