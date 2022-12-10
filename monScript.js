//on met les bouttons dans les variables
const button1 = document.getElementById('monstre1');
const button2 = document.getElementById('monstre2');
const button3 = document.getElementById('monstre3');
const button4 = document.getElementById('AttaqueClick')
const button5 = document.getElementById('AttaqueSpeClick');
const button6 = document.getElementById('DefenseClick');

//points de vie des monstres
pvMonstre1 = document.getElementById("pvMonstre1");
pvMonstre2 = document.getElementById("pvMonstre2");
pvMonstre3 = document.getElementById("pvMonstre3");

//pour savoir l'état des monstres : true = en vie et false = mort
var monstre1Etat = true;
var monstre2Etat = true;
var monstre3Etat = true;

//les points de vie des joueurs
pvJoueur1 = document.getElementById("pvJoueur1");
pvJoueur2 = document.getElementById("pvJoueur2");
pvJoueur3 = document.getElementById("pvJoueur3");
pvJoueur4 = document.getElementById("pvJoueur4");

//pour savoir, l'etat des joueurs : true = en vie et false = mort
var etatJ1 = true;
var etatJ2 = true;
var etatJ3 = true;
var etatJ4 = true;


afficheActions = document.getElementById("afficheActions");

var cptTourJoueur = 1;          //Pour déterminer quel joueur joue

var cptTempsRiposte = 4;        //Pour déterminer quand les monstres attaquent

var joueurAlea = 0;
var joueurCible = 0;

//elle s'active quand tous les monstres sont morts, mais j'arrive pas a l'utiliser : ma condition ne fonctionne pas
function victoire(){
    afficheActions.innerHTML = 'VOUS AVEZ GAGNE'
   
}

//pour afficher a quel chat c'est le tour
function afficherTour(){
    if(cptTourJoueur == 1 ){
        afficheActions.innerHTML = "C'est le tour du chat noir"
    } 
    if(cptTourJoueur == 2 ){
        afficheActions.innerHTML = "C'est le tour du chat blanc"
    } 
    if(cptTourJoueur == 3 ){
        afficheActions.innerHTML = "C'est le tour du chat marron"
    } 
    if(cptTourJoueur == 4 ){
        afficheActions.innerHTML = "C'est le tour du chat roux"
    } 
}
//////////////////////////////////////ATTAQUE//////////////////////////////////////

//fonction qui est utilisé quand Attaque ou Attaqur Spéciale est cliqué.Elle est très grande et j'aurais pu
//l'a découpé en plusieurs fonctions mais au moins elle fonctionne
function cibleJoueur(test){
    if(monstre1Etat == true){button1.disabled=false};
    if(monstre2Etat == true){button2.disabled=false};
    if(monstre3Etat == true){button3.disabled=false};

    monstre1.onclick = function (){
        if(cptTourJoueur == 1){
            if(joueur1AttaqueSpe ==true){
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML) - 20;
                afficheActions.innerHTML = "Le chat noir utilise Griffes Aiguisées! La pelote de laine perd 20 pv !";
                Joueur1AttaqueSpe = false;
                setTimeout(afficherTour,2000);
            }
            else {
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML)-10;
                afficheActions.innerHTML = "Le chat noir attaque la pelote de laine, elle perd 10 pv !";
                setTimeout(afficherTour,2000);
            }
        }
        if(cptTourJoueur == 2){
            if(joueur2AttaqueSpe ==true){
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML) - 15;
                afficheActions.innerHTML = "Le chat blanc utilise Feulement Incessant! La pelotte de laine perd 15 pv !";
                Joueur2AttaqueSpe = false;
                setTimeout(afficherTour,2000);
            }
            else {
                pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML)-10;
                afficheActions.innerHTML = "Le chat blanc attaque la pelote de laine, elle perd 10 pv !";
                setTimeout(afficherTour,2000);
            }
        }
        if(cptTourJoueur == 3){
            pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML)-10;
            afficheActions.innerHTML = "Le chat marron attaque la pelote de laine, elle perd 10 pv !";
            setTimeout(afficherTour,2000);
            
        }
        if(cptTourJoueur == 4){
            pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML)-10;
            afficheActions.innerHTML = "Le chat roux attaque la pelote de laine, elle perd 10 pv !";
            
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
            afficheActions.innerHTML = "La pelote de laine est mort";
        }
        
        if(monstre1Etat == false && monstre2Etat == false && monstre3Etat == false){
            victoire()
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
                afficheActions.innerHTML = "Le chat noir utilise Griffes Aiguisées! L'Aspirateur perd 20 pv !";
                Joueur1AttaqueSpe = false;
                setTimeout(afficherTour,2000);
            }
            else {
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML)-10;
                afficheActions.innerHTML = "Le chat noir attaque l'Aspirateur, il perd 10 pv !";
                setTimeout(afficherTour,2000);
            }
        }
        if(cptTourJoueur == 2){
            if(joueur2AttaqueSpe ==true){
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML) - 15;
                afficheActions.innerHTML = "Le chat blanc utilise Feulement Incessant! L'Aspirateur perd 15 pv !";
                Joueur2AttaqueSpe = false;
                setTimeout(afficherTour,2000);
            }
            else {
                pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML)-10;
                afficheActions.innerHTML = "Le chat blanc attaque l'Aspirateur, il perd 10 pv !";
                setTimeout(afficherTour,2000);
            }
        }
        if(cptTourJoueur == 3){
            pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML)-10;
            afficheActions.innerHTML = "Le chat marron attaque l'Aspirateur, il perd 10 pv !";
            setTimeout(afficherTour,2000);
        }
        if(cptTourJoueur == 4){
            pvMonstre2.innerHTML = parseInt(pvMonstre2.innerHTML)-10;
            afficheActions.innerHTML = "Le chat roux attaque l'Aspirateur, il perd 10 pv !";
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
            afficheActions.innerHTML = "L'Aspirateur est mort'";
        }
        if(monstre1Etat == false && monstre2Etat == false && monstre3Etat == false){
            victoire()
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
                afficheActions.innerHTML = "Le chat noir utilise Griffes Aiguisées! Le Pchit-Pchit perd 20 pv !";
                Joueur1AttaqueSpe = false;
                setTimeout(afficherTour,2000);
            }
            else {
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML)-10;
                afficheActions.innerHTML = "Le chat noir attaque le Pchit-Pchit, il perd 10 pv !";
                setTimeout(afficherTour,2000);
            }
        }
        if(cptTourJoueur == 2){
            if(joueur2AttaqueSpe ==true){
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML) - 15;
                afficheActions.innerHTML = "Le chat blanc utilise Feulement Incessant! Le Pchit-Pchit perd 15 pv !";
                Joueur2AttaqueSpe = false;
                setTimeout(afficherTour,2000);
            }
            else {
                pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML)-10;
                afficheActions.innerHTML = "Le chat blanc attaque le Pchit-Pchit, il perd 10 pv !";
                setTimeout(afficherTour,2000);
            }
        }
        if(cptTourJoueur == 3){
            pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML)-10;
            afficheActions.innerHTML = "Le chat marron attaque le Pchit-Pchit, il perd 10 pv !";
            setTimeout(afficherTour,2000);
        }
        if(cptTourJoueur == 4){
            pvMonstre3.innerHTML = parseInt(pvMonstre3.innerHTML)-10;
            afficheActions.innerHTML = "Le chat roux attaque le Pchit-Pchit, il perd 10 pv !";
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
            afficheActions.innerHTML = "Le Pchit-Pchit est mort";
        }
        if(monstre1Etat == false && monstre2Etat == false && monstre3Etat == false){
            victoire()
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
                afficheActions.innerHTML = "La Pelote de laine attaque. Le chat noir 1 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le chat noir a reussit à se défendre contre la Pelote de laine ';
                joueur1defense = false;
            }
        };
        if(joueurCible == 2){
            if(joueur2defense == false){
                pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
                afficheActions.innerHTML = "La Pelote de laine attaque. Le chat blanc perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le chat blanc a reussit à se defendre contre la Pelote de laine';
                joueur2defense = false;
            }
        };
        if(joueurCible == 3){
            if(joueur3defense == false){
                pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
                afficheActions.innerHTML = "La Pelote de laine attaque. Le chat marron perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le chat marron a reussit a se defendre contre la Pelote de laine';
                joueur3defense = false
            }
        };
        if(joueurCible == 4){
            if(joueur4defense == false){
                pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
                afficheActions.innerHTML = "La Pelote de laine attaque. Le chat roux 4 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML= 'Le chat roux a reussit à se defendre contre la Pelote de laine';
                joueur4defense = false;
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
                afficheActions.innerHTML = "L'Aspirateur attaque. Le chat noir 1 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = "Le chat noir a reussit à se défendre contre l'Aspirateur";
                joueur1defense = false;
            }
        };
        if(joueurCible == 2){
            if(joueur2defense == false){
                pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
                afficheActions.innerHTML = "L'Aspirateur attaque. Le chat blanc 2 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = "Le chat blanc a reussit à se défendre contre l'Aspirateur";
                joueur2defense = false;
            }
        };
        if(joueurCible == 3){
            if(joueur3defense == false){
                pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
                afficheActions.innerHTML = "L'Aspirateur attaque. Le chat marron 3 perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = "Le chat marron a reussit à se défendre contre l'Aspirateur";
                joueur3defense = false;
            }
        };
        if(joueurCible == 4){
            if(joueur4defense == false){
            pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
            afficheActions.innerHTML = "L'Aspirateur attaque. Le chat roux perd 10 pv !";
            }
            else{
                afficheActions.innerHTML= "Le chat roux a reussit à se défendre contre l'Aspirateur";
            joueur4defense = false;
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
                afficheActions.innerHTML = "Le Pchit-Pchit attaque. Le chat noir perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le chat noir a reussit à se défendre contre le Pchit-Pchit';
                joueur1defense = false;
            }
        };
        if(joueurCible == 2){
            if(joueur2defense == false){
                pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
                afficheActions.innerHTML = "Le Pchit-Pchit attaque. Le chat blanc perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le joueur 2 a reussit à se defendre contre le Pchit-Pchit';
                joueur2defense = false
            }
        };
        if(joueurCible == 3){
            if(joueur3defense == false){
                pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
                afficheActions.innerHTML = "Le Pchit-Pchit attaque. Le chat marron perd 10 pv !";
            }
            else{
                afficheActions.innerHTML = 'Le chat marron a reussit à se defendre contre le Pchit-Pchit';
                joueur3defense = false
            }
        };
        if(joueurCible == 4){
            if(joueur4defense == false){
            pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
            afficheActions.innerHTML = "Le Pchit-Pchit attaque. Le chat roux perd 10 pv !";
            }
            else{
                afficheActions.innerHTML= 'Le chat roux a reussit à se defendre contre lePchit-Pchit';
                joueur4defense = false
            }
        };
    }
    cptTempsRiposte = 4;
    setTimeout(afficherTour,2000);
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
        if(joueur2Mana>=10){
            manaJoueur2Affiche.innerHTML = parseInt(manaJoueur2Affiche.innerHTML) - 10;
            joueur2AttaqueSpe = true;
            afficheActions.innerHTML = "Cliquez sur le monstre que vous souhaitez attaquer";
            cibleJoueur();
        }
        else{
            afficheActions.innerHTML="Vous n'avez pas assez de PM, choisissez une autrea action"
        }
    }
    if(cptTourJoueur == 3){
        if(joueur3Mana>=20){
            manaJoueur3Affiche.innerHTML = parseInt(manaJoueur3Affiche.innerHTML) - 20;
            afficheActions.innerHTML = "Le chat marron utilise poil de fer et protège tous les chats lors de la prochaine attaque des monstres."
            joueur1defense=true;
            joueur2defense=true;
            joueur3defense=true;
            joueur4defense=true;
            cptTempsRiposte = cptTempsRiposte -1;
            cptTourJoueur = cptTourJoueur +1;
        }
        else{
            afficheActions.innerHTML="Vous n'avez pas assez de PM, choisissez une autrea action"
        }
    }
    if(cptTourJoueur == 4){
        if(joueur4Mana>=15){
            manaJoueur4Affiche.innerHTML = parseInt(manaJoueur4Affiche.innerHTML) - 15;
            pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML) + 15;
            pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML) + 15;
            pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML) + 15;
            pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML) + 15;
            afficheActions.innerHTML = "Le chat roux utilise Herb'agogo. Tous les chats récupèrent 15pv !";
        }
        else{
            afficheActions.innerHTML="Vous n'avez pas assez de PM, choisissez une autrea action"
        }
        cptTempsRiposte = cptTempsRiposte -1;
        cptTourJoueur = cptTourJoueur +1;
        
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
        afficheActions.innerHTML = "Le chat noir se prépare à parer la prochaine attaque des monstres !";
        setTimeout(afficherTour,2000);    
    }
    if (cptTourJoueur == 2){
        joueur2defense =true;
        afficheActions.innerHTML = "Le chat blanc se prépare à parer la prochaine attaque des monstres !";
        setTimeout(afficherTour,2000);
    }
    if (cptTourJoueur == 3){
        joueur3defense = true;
        afficheActions.innerHTML = "Le chat marron se prépare à parer la prochaine attaque des monstres !";
        setTimeout(afficherTour,2000);
    }
    if (cptTourJoueur == 4){
        joueur4defense = true;
        afficheActions.innerHTML = "Le chat roux se prépare à parer la prochaine attaque des monstres !";  
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

