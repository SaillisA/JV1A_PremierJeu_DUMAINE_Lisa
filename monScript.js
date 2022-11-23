maDiv = document.getElementById("maDiv");
pvMonstreActuel = document.getElementById("pvMonstreActuel");
afficheActionMonstre = document.getElementById("afficheActionMonstre");

pvJoueurActuel = document.getElementById("pvJoueurActuel");
afficheActionJoueur = document.getElementById("afficheActionJoueur");




AttaqueClick.onclick = function() {
    pvMonstreActuel.innerHTML = parseInt(pvMonstreActuel.innerHTML)-10;
    afficheActions.innerHTML = " Il a perdu 10 pv !";

    pvJoueurActuel.innerHTML = parseInt(pvJoueurActuel.innerHTML)-10;
    afficheActions.innerHTML = " Vous avez perdu 10 pv !"
}

