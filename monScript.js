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

//////////////////////////////////////ATTAQUE//////////////////////////////////////

function cibleJoueur(test){
    button1.disabled=false;
    button2.disabled=false;
    button3.disabled=false;
    monstre1.onclick = function (){
        if(cptTourJoueur == 1){
            if(joueur1AttaqueSpe ==true){
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur1 utilise son attaque spéciale. Le monstre1 perd 20 pv !";
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
        if(cptTempsRiposte==0){
            setTimeout(function(){
                afficheActions.innerHTML = "Les monstres attaquent !";
            }, 2000);
            setTimeout(monstre1Attaque,4000);
            setTimeout(monstre2Attaque,7000);
            setTimeout(monstre3Attaque,10000);
        }
    }
    monstre2.onclick = function (){
        if(cptTourJoueur == 1){
            if(joueur1AttaqueSpe ==true){
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur1 utilise son attaque spéciale. Le monstre2 perd 20 pv !";
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
        if(cptTempsRiposte==0){
            setTimeout(function(){
                afficheActions.innerHTML = "Les monstres attaquent !";
            }, 2000);
            setTimeout(monstre1Attaque,4000);
            setTimeout(monstre2Attaque,7000);
            setTimeout(monstre3Attaque,10000);
        }
    }

    monstre3.onclick = function (){
        if(cptTourJoueur == 1){
            if(joueur1AttaqueSpe ==true){
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML) - 20;
                afficheActions.innerHTML = "Le joueur1 utilise son attaque spéciale. Le monstre3 perd 20 pv !";
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
        if(cptTempsRiposte==0){
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


function monstre2Attaque(){
    joueurCible=monstreCible()
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


function monstre3Attaque(){
    joueurCible=monstreCible()
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
    cptTempsRiposte = 4;
};


AttaqueClick.onclick = function() {     //fonction attaque des joueurs
    afficheActions.innerHTML = "Cliquez sur le monstre que vous souhaitez attaquer";
    cibleJoueur();
}

//////////////////////////////////////ATTAQUE SPECIALE//////////////////////////////////////
joueur1AttaqueSpe = false;
joueur2AttaqueSpe = false;
joueur3AttaqueSpe = false;
joueur4AttaqueSpe = false;

AttaqueSpeClick.onclick= function(){
    if (cptTourJoueur == 1){
        joueur1AttaqueSpe = true;
    }
    if(cptTourJoueur == 2){
        joueur2AttaqueSpe = true;

    }
    if(cptTourJoueur == 3){
        joueur3AttaqueSpe = true;

    }
    if(cptTourJoueur == 40){
        joueur4AttaqueSpe = true;

    }
    cibleJoueur()
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
    }
}