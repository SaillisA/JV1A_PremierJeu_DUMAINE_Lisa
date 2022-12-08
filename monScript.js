const button1 = document.getElementById('monstre1');
const button2 = document.getElementById('monstre2');
const button3 = document.getElementById('monstre3');
const button4 = document.getElementById('AttaqueClick')
const button5 = document.getElementById('AttaqueSpeClick');
const button6 = document.getElementById('DefenseClick');

pvMonstre1 = document.getElementById("pvMonstre1");
pvMonstre2 = document.getElementById("pvMonstre2");
pvMonstre3 = document.getElementById("pvMonstre3");

var monstre1Etat = true;
var monstre2Etat = true;
var monstre3Etat = true;

pvJoueur1 = document.getElementById("pvJoueur1");
pvJoueur2 = document.getElementById("pvJoueur2");
pvJoueur3 = document.getElementById("pvJoueur3");
pvJoueur4 = document.getElementById("pvJoueur4");


afficheActions = document.getElementById("afficheActions");

var cptTourJoueur = 1;          //Pour déterminer quel joueur joue

var cptTempsRiposte = 4;        //Pour déterminer quand les monstres attaquent

var joueurAlea = 0;
var joueurCible = 0;

function victoire(){
    afficheActions.innerHTML = 'VOUS AVEZ GAGNE'
}


//////////////////////////////////////ATTAQUE//////////////////////////////////////

function cibleJoueur(test){
    if(monstre1Etat == true){button1.disabled=false};
    if(monstre2Etat == true){button2.disabled=false};
    if(monstre3Etat == true){button3.disabled=false};

    monstre1.onclick = function (){
        if(cptTourJoueur == 1){
            if(joueur1AttaqueSpe ==true){
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur1 utilise son attaque spéciale. Le monstre1 perd 20 pv !";
                Joueur1AttaqueSpe = false;
            }
            else {
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur1 attaque le monstre1,il perd 10 pv !";
            }
        }
        if(cptTourJoueur == 2){
            if(joueur2AttaqueSpe ==true){
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur2 utilise son attaque spéciale. Le monstre1 perd 20 pv !";
                Joueur2AttaqueSpe = false;
            }
            else {
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur2 attaque le monstre1,il perd 10 pv !";
            }
        }
        if(cptTourJoueur == 3){
            if(joueur3AttaqueSpe ==true){
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur3 utilise son attaque spéciale. Le monstre1 perd 20 pv !";
                Joueur3AttaqueSpe = false;
            }
            else {
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur3 attaque le monstre1,il perd 10 pv !";
            }
        }
        if(cptTourJoueur == 4){
            if(joueur4AttaqueSpe ==true){
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur4 utilise son attaque spéciale. Le monstre1 perd 20 pv !";
                Joueur4AttaqueSpe = false;
            }
            else {
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur4 attaque le monstre1,il perd 10 pv !";
            }
        }
        cptTempsRiposte = cptTempsRiposte -1;
        cptTourJoueur = cptTourJoueur +1;

        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
        var pvM1 = parseInt(pvMonstre1.innerHTML)
        if(pvM1<=0){
            monstre1Etat = false;
            pvMonstre1.innerHTML = "0";
            afficheActions.innerHTML = "Le monstre 1 est dead";
        }

        if(cptTempsRiposte==0){
            setTimeout(function(){
                afficheActions.innerHTML = "Les monstres attaquent !";
            }, 2000);
            setTimeout(monstre1Attaque,4000);
            setTimeout(monstre2Attaque,7000);
            setTimeout(monstre3Attaque,10000);
            cptTempsRiposte = 4;
            cptTourJoueur = 1;
        }
    }

    monstre2.onclick = function (){
        if(cptTourJoueur == 1){
            if(joueur1AttaqueSpe ==true){
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur1 utilise son attaque spéciale. Le monstre2 perd 20 pv !";
                Joueur1AttaqueSpe = false;
            }
            else {
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur1 attaque le monstre2,il perd 10 pv !";
            }
        }
        if(cptTourJoueur == 2){
            if(joueur2AttaqueSpe ==true){
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur2 utilise son attaque spéciale. Le monstre2 perd 20 pv !";
                Joueur2AttaqueSpe = false;
            }
            else {
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur2 attaque le monstre2,il perd 10 pv !";
            }
        }
        if(cptTourJoueur == 3){
            if(joueur3AttaqueSpe ==true){
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur3 utilise son attaque spéciale. Le monstre2 perd 20 pv !";
                Joueur3AttaqueSpe = false;
            }
            else {
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur3 attaque le monstre2,il perd 10 pv !";
            }
        }
        if(cptTourJoueur == 4){
            if(joueur4AttaqueSpe ==true){
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur4 utilise son attaque spéciale. Le monstre2 perd 20 pv !";
                Joueur4AttaqueSpe = false;
            }
            else {
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur4 attaque le monstre2,il perd 10 pv !";
            }
        }
        cptTempsRiposte = cptTempsRiposte -1;
        cptTourJoueur = cptTourJoueur +1;

        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
        var pvM2= parseInt(pvMonstre2.innerHTML)
        if(pvM2<=0){
            monstre2Etat = false;
            pvMonstre2.innerHTML = "0";
            afficheActions.innerHTML = "Le monstre 2 est dead";
        }
        if(cptTempsRiposte==0){
            setTimeout(function(){
                afficheActions.innerHTML = "Les monstres attaquent !";
            }, 2000);
            setTimeout(monstre1Attaque,4000);
            setTimeout(monstre2Attaque,7000);
            setTimeout(monstre3Attaque,10000);
            cptTempsRiposte = 4;
            cptTourJoueur = 1;
        }
    }

    monstre3.onclick = function (){
        if(cptTourJoueur == 1){
            if(joueur1AttaqueSpe ==true){
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur1 utilise son attaque spéciale. Le monstre3 perd 20 pv !";
                Joueur1AttaqueSpe = false;
            }
            else {
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur1 attaque le monstre3,il perd 10 pv !";
            }
        }
        if(cptTourJoueur == 2){
            if(joueur2AttaqueSpe ==true){
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur2 utilise son attaque spéciale. Le monstre3 perd 20 pv !";
                Joueur2AttaqueSpe = false;
            }
            else {
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur2 attaque le monstre3,il perd 10 pv !";
            }
        }
        if(cptTourJoueur == 3){
            if(joueur3AttaqueSpe ==true){
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur3 utilise son attaque spéciale. Le monstre3 perd 20 pv !";
                Joueur3AttaqueSpe = false;
            }
            else {
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur3 attaque le monstre3,il perd 10 pv !";
            }
        }
        if(cptTourJoueur == 4){
            if(joueur4AttaqueSpe ==true){
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur4 utilise son attaque spéciale. Le monstre3 perd 20 pv !";
                Joueur4AttaqueSpe = false;
            }
            else {
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML)-10;
                afficheActions.innerHTML = "Le joueur4 attaque le monstre3,il perd 10 pv !";
            }
        }
        cptTempsRiposte = cptTempsRiposte -1;
        cptTourJoueur = cptTourJoueur +1;

        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
        var pvM3 = parseInt(pvMonstre3.innerHTML)
        if(pvM3<=0){
            monstre3Etat = false;
            pvMonstre3.innerHTML = "0";
            afficheActions.innerHTML = "Le monstre 3 est dead";
        }
        if(cptTempsRiposte==0){
            setTimeout(function(){
                afficheActions.innerHTML = "Les monstres attaquent !";
            }, 2000);
            setTimeout(monstre1Attaque,4000);
            setTimeout(monstre2Attaque,7000);
            setTimeout(monstre3Attaque,10000);
            cptTempsRiposte = 4;
            cptTourJoueur = 1;
        }
    }
    if(monstre1Etat == false && monstre2Etat == false && monstre3Etat == false){
        victoire()
    }
}



function monstreCible(){                //fonction pour déterminer quel cible est attqué aleatoirement
    joueurAlea = Math.floor(Math.random() * 4) + 1;
    return joueurAlea;
}



function monstre1Attaque(){              //fonction pour l'attaque des monstres
    joueurCible=monstreCible()
    if(monstre1Etat == true){
        if(joueurCible == 1){
            if(joueur1defense == false){
                pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
                afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 1 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le joueur1 a reussit a se défendre ';
            }
        };
        if(joueurCible == 2){
            if(joueur2defense == false){
                pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
                afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 2 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le joueur 2 a reussit a se defendre';
            }
        };
        if(joueurCible == 3){
            if(joueur3defense == false){
                pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
                afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 3 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le joueu3 a reussit a se defendre';
            }
        };
        if(joueurCible == 4){
            if(joueur4defense == false){
                pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
                afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 4 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML= 'Le joueur4 a reussit a se defendre';
            }
        };
    }
}


function monstre2Attaque(){
    joueurCible=monstreCible()
    if(monstre2Etat == true){
        if(joueurCible == 1){
            if(joueur1defense == false){
                pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
                afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 1 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le joueur1 a reussit a se défendre ';
            }
        };
        if(joueurCible == 2){
            if(joueur2defense == false){
                pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
                afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 2 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le joueur 2 a reussit a se defendre';
            }
        };
        if(joueurCible == 3){
            if(joueur3defense == false){
                pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
                afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 3 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le joueu3 a reussit a se defendre';
            }
        };
        if(joueurCible == 4){
            if(joueur4defense == false){
            pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 4 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML= 'Le joueur4 a reussit a se defendre';
            }
        }
    }
}


function monstre3Attaque(){
    joueurCible=monstreCible()
    if(monstre3Etat == true){
        if(joueurCible == 1){
            if(joueur1defense == false){
                pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
                afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 1 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le joueur1 a reussit a se défendre ';
            }
        };
        if(joueurCible == 2){
            if(joueur2defense == false){
                pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
                afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 2 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le joueur 2 a reussit a se defendre';
            }
        };
        if(joueurCible == 3){
            if(joueur3defense == false){
                pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
                afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 3 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le joueu3 a reussit a se defendre';
            }
        };
        if(joueurCible == 4){
            if(joueur4defense == false){
            pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 4 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML= 'Le joueur4 a reussit a se defendre';
            }
        };
    }
    cptTempsRiposte = 4;
};


AttaqueClick.onclick = function() {     //fonction attaque des joueurs
    afficheActions.innerHTML = "Cliquez sur le monstre que vous souhaitez attaquer";
    cibleJoueur();
}

//////////////////////////////////////ATTAQUE SPECIALE//////////////////////////////////////
manaJoueur1Affiche = document.getElementById("manaJ1");
manaJoueur2Affiche = document.getElementById("manaJ2");
manaJoueur3Affiche = document.getElementById("manaJ3");
manaJoueur4Affiche = document.getElementById("manaJ4");



joueur1AttaqueSpe = false;
joueur2AttaqueSpe = false;
joueur3AttaqueSpe = false;
joueur4AttaqueSpe = false;

AttaqueSpeClick.onclick= function(){
    var joueur1Mana = parseInt(manaJoueur1Affiche.innerHTML)
    var joueur2Mana = parseInt(manaJoueur2Affiche.innerHTML)
    var joueur3Mana = parseInt(manaJoueur3Affiche.innerHTML)
    var joueur4Mana = parseInt(manaJoueur4Affiche.innerHTML)
    if (cptTourJoueur == 1){
        if(joueur1Mana>=15){
            manaJoueur1Affiche.innerHTML = parseInt(manaJoueur1Affiche.innerHTML) - 15;
            joueur1AttaqueSpe = true;
            afficheActions.innerHTML = "Cliquez sur le monstre que vous souhaitez attaquer";
            cibleJoueur();
        }
        else{
            afficheActions.innerHTML="Vous n'avez pas assez de PM, choisissez une autrea action"
        }
    }
    if(cptTourJoueur == 2){
        if(joueur2Mana>=15){
            manaJoueur2Affiche.innerHTML = parseInt(manaJoueur2Affiche.innerHTML) - 15;
            joueur2AttaqueSpe = true;
            afficheActions.innerHTML = "Cliquez sur le monstre que vous souhaitez attaquer";
            cibleJoueur();
        }
        else{
            afficheActions.innerHTML="Vous n'avez pas assez de PM, choisissez une autrea action"
        }
    }
    if(cptTourJoueur == 3){
        if(joueur3Mana>=15){
            manaJoueur3Affiche.innerHTML = parseInt(manaJoueur3Affiche.innerHTML) - 15;
            joueur3AttaqueSpe = true;
            afficheActions.innerHTML = "Cliquez sur le monstre que vous souhaitez attaquer";
            cibleJoueur();
        }
        else{
            afficheActions.innerHTML="Vous n'avez pas assez de PM, choisissez une autrea action"
        }
    }
    if(cptTourJoueur == 4){
        if(joueur4Mana>=15){
            manaJoueur4Affiche.innerHTML = parseInt(manaJoueur4Affiche.innerHTML) - 15;
            joueur4AttaqueSpe = true;
            afficheActions.innerHTML = "Cliquez sur le monstre que vous souhaitez attaquer";
            cibleJoueur();
        }
        else{
            afficheActions.innerHTML="Vous n'avez pas assez de PM, choisissez une autrea action"
        }
    }
}


//////////////////////////////////////DEFENSE//////////////////////////////////////
var joueur1defense = false;
var joueur2defense = false;
var joueur3defense = false;
var joueur4defense = false;


DefenseClick.onclick = function() {
    if (cptTourJoueur == 1){
        joueur1defense = true;
        afficheActions.innerHTML = "Le joueur1 lève son bouclier pour parer la prochaine attaque des monstres !";
        }
    if (cptTourJoueur == 2){
        joueur2defense =true;
        afficheActions.innerHTML = "Le joueur2 lève son bouclier pour parer la prochaine attaque des monstres !";
        }
    if (cptTourJoueur == 3){
        joueur3defense = true;
        afficheActions.innerHTML = "Le joueur3 lève son bouclier pour parer la prochaine attaque des monstres !";
        }
    if (cptTourJoueur == 4){
        joueur4defense = true;
        afficheActions.innerHTML = "Le joueur4 lève son bouclier pour parer la prochaine attaque des monstres !";
        }
    cptTempsRiposte = cptTempsRiposte -1;
    cptTourJoueur = cptTourJoueur +1;
    if(cptTempsRiposte==0){
        setTimeout(function(){
            afficheActions.innerHTML = "Les monstres attaquent !";
        }, 2000);
        setTimeout(monstre1Attaque,4000);
        setTimeout(monstre2Attaque,7000);
        setTimeout(monstre3Attaque,10000);
        cptTempsRiposte = 4;
        cptTourJoueur = 1;
    }
}
