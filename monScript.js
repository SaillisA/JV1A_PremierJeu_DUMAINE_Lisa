pvMonstre1 = document.getElementById("pvMonstre1");
pvMonstre2 = document.getElementById("pvMonstre2");
pvMonstre3 = document.getElementById("pvMonstre3");

pvJoueur1 = document.getElementById("pvJoueur1");
pvJoueur2 = document.getElementById("pvJoueur2");
pvJoueur3 = document.getElementById("pvJoueur3");
pvJoueur4 = document.getElementById("pvJoueur4");

afficheActions = document.getElementById("afficheActions");

var cptTempsRiposte = 4;
var joueurAlea = 0;
var joueurCible = 0;



AttaqueClick.onclick = function() {
    pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML)-10;
    afficheActions.innerHTML = " Il a perdu 10 pv !";
    cptTempsRiposte = cptTempsRiposte -1;

    if(cptTempsRiposte==0){

        joueurCible=monstreCible()
        if(joueurCible == 1){
            pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 1 perd 10 pv !";
        }
        if(joueurCible == 2){
            pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 2 perd 10 pv !";
        }
        if(joueurCible == 3){
            pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 3 perd 10 pv !";
        }
        if(joueurCible == 4){
            pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre1 attaque. Le joueur 4 perd 10 pv !";
        }

        joueurCible=monstreCible()
        if(joueurCible == 1){
            pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 1 perd 10 pv !";
        }
        if(joueurCible == 2){
            pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 2 perd 10 pv !";
        }
        if(joueurCible == 3){
            pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 3 perd 10 pv !";
        }
        if(joueurCible == 4){
            pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre2 attaque. Le joueur 4 perd 10 pv !";
        }

        joueurCible=monstreCible()
        if(joueurCible == 1){
            pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 1 perd 10 pv !";
        }
        if(joueurCible == 2){
            pvJoueur2.innerHTML = parseInt(pvJoueur2.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 2 perd 10 pv !";
        }
        if(joueurCible == 3){
            pvJoueur3.innerHTML = parseInt(pvJoueur3.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 3 perd 10 pv !";
        }
        if(joueurCible == 4){
            pvJoueur4.innerHTML = parseInt(pvJoueur4.innerHTML)-10;
            afficheActions.innerHTML = "Le monstre3 attaque. Le joueur 4 perd 10 pv !";
        }
        cptTempsRiposte = 4;
    }
}

function monstreCible(){
    joueurAlea = Math.floor(Math.random() * 4) + 1;
    return joueurAlea
}