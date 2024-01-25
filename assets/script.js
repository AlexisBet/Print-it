// La liste des diapositives avec leurs images et leurs descriptions
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Index de la diapositive actuellement affichée
let currentSlideIndex = 0;

// Récupére les éléments du carrousel dans le HTML
const banner = document.getElementById('banner');
const bannerImage = banner.querySelector('.banner-img');
const bannerTagLine = banner.querySelector('p');

// Récupére les éléments des flèches
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

// Ajouts des EventListeners
leftArrow.addEventListener('click', function() {
    console.log('Clic sur la flèche gauche !');
	//Ajout des conditions pour gérer le défilement
	if (currentSlideIndex === 0) {
        // Si on est à la première image, passer à la dernière
        currentSlideIndex = slides.length - 1;
    } else {
        // Sinon, passer à la diapositive précédente
        currentSlideIndex = (currentSlideIndex - 1) % slides.length;
    }
    // Mise à jour du carrousel
    updateBanner();
});

rightArrow.addEventListener('click', function() {
    console.log('Clic sur la flèche droite !');
	//Ajout des conditions pour gérer le défilement
	if (currentSlideIndex === slides.length - 1) {
        // Si on est à la dernière image, retourner à la première
        currentSlideIndex = 0;
    } else {
        // Sinon, passer à la diapositive suivante
        currentSlideIndex = currentSlideIndex + 1;
    }
    // Mise à jour du carrousel
    updateBanner();
});

//Récupération du conteneur des points (bullets)
const dotsContainer = banner.querySelector('.dots');

// Création des bullet points en fonction du nombre de diapositives
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);

    // Ajouts d'un EventListener pour changer de diapositive lorsqu'on clique sur un point
    dot.addEventListener('click', function() {
        currentSlideIndex = index;
        updateBanner();
    });
});

// les bullet points se mettent a jour lors du changement de diapositive
function updateBanner() {
    const currentSlide = slides[currentSlideIndex];
    bannerImage.src = `./assets/images/slideshow/${currentSlide.image}`;
    bannerTagLine.innerHTML = currentSlide.tagLine;

    // les classes actives se mettent a jour pour les bullet points
    dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentSlideIndex);
    });
}