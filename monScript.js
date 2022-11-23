pvMonstre1 = document.getElementById("pvMonstre1");
pvJoueur1 = document.getElementById("pvJoueur1");
afficheActions = document.getElementById("afficheActions");

var cptTempsRiposte = 4


AttaqueClick.onclick = function() {
    pvMonstre1.innerHTML = parseInt(pvMonstre1.innerHTML)-10;
    afficheActions.innerHTML = " Il a perdu 10 pv !";
    cptTempsRiposte = cptTempsRiposte -1;

    if(cptTempsRiposte==0){
        pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre1 attaque. Vous avez perdu 10 pv !";
        
        pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre2 attaque. Vous avez perdu 10 pv !";

        pvJoueur1.innerHTML = parseInt(pvJoueur1.innerHTML)-10;
        afficheActions.innerHTML = "Le monstre3 attaque. Vous avez perdu 10 pv !";

        cptTempsRiposte = 4;
    }
}

