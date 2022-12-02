const button1 = document.getElementById('monstre1');
const button2 = document.getElementById('monstre2');
const button3 = document.getElementById('monstre3');
pvMonstre1 = document.getElementById("pvMonstre1");
pvMonstre2 = document.getElementById("pvMonstre2");
pvMonstre3 = document.getElementById("pvMonstre3");

pvJoueur1 = document.getElementById("pvJoueur1");
pvJoueur2 = document.getElementById("pvJoueur2");
pvJoueur3 = document.getElementById("pvJoueur3");
pvJoueur4 = document.getElementById("pvJoueur4");

afficheActions = document.getElementById("afficheActions");

var cptTourJoueur = 1;          //Pour déterminer quel joueur joue
var cptTempsRiposte = 4;        //Pour déterminer quand les monstres attaquent

var joueurAlea = 0;
var joueurCible = 0;


AttaqueClick.onclick = function() {     //fonction attaque des joueurs
    afficheActions.innerHTML = "Cliquez sur le monstre que vous souhaitez attaquer";
    cptTempsRiposte = cptTempsRiposte -1;
    cptTourJoueur = cptTourJoueur +1;
    cibleJoueur(cptTempsRiposte);
}


function cibleJoueur(test){
    button1.disabled=false;
    button2.disabled=false;
    button3.disabled=false;
    monstre1.onclick = function (){
        pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML)-10;
        afficheActions.innerHTML = "Monstre1 a perdu 10 pv !";
        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
        if(test==0){
            setTimeout(function(){
                afficheActions.innerHTML = "Les monstres attaquent !";
            }, 2000);
            setTimeout(monstre1Attaque,4000);
            setTimeout(monstre2Attaque,7000);
            setTimeout(monstre3Attaque,10000);
        }
    }
    monstre2.onclick = function (){
        pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML)-10;
        afficheActions.innerHTML = "Monstre2 a perdu 10 pv !";
        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
        if(test==0){
            setTimeout(function(){
                afficheActions.innerHTML = "Les monstres attaquent !";
            }, 2000);
            setTimeout(monstre1Attaque,4000);
            setTimeout(monstre2Attaque,7000);
            setTimeout(monstre3Attaque,10000);
        }
    }
    monstre3.onclick = function (){
        pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML)-10;
        afficheActions.innerHTML = "Monstre3 a perdu 10 pv !";
        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
        if(test==0){
            setTimeout(function(){
                afficheActions.innerHTML = "Les monstres attaquent !";
            }, 2000);
            setTimeout(monstre1Attaque,4000);
            setTimeout(monstre2Attaque,7000);
            setTimeout(monstre3Attaque,10000);
        }
    }
}

function monstreCible(){                //fonction pour déterminer quel cible est attqué aleatoirement
    joueurAlea = Math.floor(Math.random() * 4) + 1;
    return joueurAlea;
}


function monstre1Attaque(){              //fonction pour l'attaque des monstres
    joueurCible=monstreCible()
    if(joueurCible == 1){
        pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 1 perd 10 pv !";
    };
    if(joueurCible == 2){
        pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 2 perd 10 pv !";
    };
    if(joueurCible == 3){
        pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 3 perd 10 pv !";
    };
    if(joueurCible == 4){
        pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 4 perd 10 pv !";
    };
}
function monstre2Attaque(){
    joueurCible=monstreCible()
    if(joueurCible == 1){
        pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 1 perd 10 pv !";
    };
    if(joueurCible == 2){
        pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 2 perd 10 pv !";
    };
    if(joueurCible == 3){
        pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 3 perd 10 pv !";
    };
    if(joueurCible == 4){
        pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 4 perd 10 pv !";
    };
}
function monstre3Attaque(){
    joueurCible=monstreCible()
    if(joueurCible == 1){
        pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 1 perd 10 pv !";
    };
    if(joueurCible == 2){
        pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 2 perd 10 pv !";
    };
    if(joueurCible == 3){
        pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 3 perd 10 pv !";
    };
    if(joueurCible == 4){
        pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 4 perd 10 pv !";
    };
    cptTempsRiposte = 4;
};
