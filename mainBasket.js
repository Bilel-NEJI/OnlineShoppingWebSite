//console.log("fichier js en marche");

//variable locale pour ajouter le produit sélectionné avec le boutton-class adding
let cards = document.querySelectorAll('.adding');

//
let produits = [
    //pour produit 1
    {
        name: 'p1',
        tag: 'tag_p1',
        price: 350,
        inBasket: 0
    },
    //pour produit 2
    {
        name: 'p2',
        tag: 'tag_p2',
        price: 280,
        inBasket: 0
    },
    //pour produit 3
    {
        name: 'p3',
        tag: 'tag_p3',
        price: 120,
        inBasket: 0
    },
    //pour produit 4
    {
        name: 'p4',
        tag: 'tag_p',
        price: 450,
        inBasket: 0
    },
    //pour produit 5
    {
        name: 'p5',
        tag: 'tag_p5',
        price: 180,
        inBasket: 0
    },
    //pour produit 6
    {
        name: 'p6',
        tag: 'tag_p6',
        price: 350,
        inBasket: 0
    },
    //pour produit 7
    {
        name: 'p7',
        tag: 'tag_p7',
        price: 190,
        inBasket: 0
    },
]


//for est pour boucler dans les cards que nous avons créer comme intermédiaires entre le html et back-end
for (let i=0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        quantitiesAjoutées();
    })
}

//pour maintenir la quantité ajoutée du panier après Actualiser la page
function enChargementQuantitiesAjoutées() {
    let num_pd = localStorage.getItem('quantitiesAjoutées');
    if(num_pd) {
        document.querySelector('.adding span').textContent = num_pd;
    }
}

//fontionne pour gérer et mettre à jour la quantité sélectionné
function quantitiesAjoutées() {
    let num_pd = localStorage.getItem('quantitiesAjoutées');  //on crée une variable dans local storage du navigateur pour affichage mise à jour du quantité panier
    //console.log(num_pd); //pour voir la valeur de num_pd dans local storage
    //console.log(num_pd); //pour voir le type de num_pd dans local storage

    num_pd = parseInt(num_pd);  //pour convertir le string trouvé en integer

    //if est pour test si le localStorage est vide ou pas
    if(num_pd) {
        localStorage.setItem('quantitiesAjoutées', num_pd + 1); //si vide ; on incrimente par 1 la valeur existante
        document.querySelector('.tttt span').textContent = num_pd + 1;
    } else {
        localStorage.setItem('quantitiesAjoutées', 1);    //sinon ; on commence par 1
        document.querySelector('.tttt span').textContent = 1;   }
                }

enChargementQuantitiesAjoutées();   //appel de cette fonctionne pour vérifier la quantité ajoutée en premier ouverture de la page
