// Définir la date et l'heure de fin des cours (exemple: 30 juin 2024, 16h00)
const endDate = new Date("2026-03-04T15:40:00").getTime();

// Mettre à jour le décompte toutes les millisecondes
const updateCountdown = setInterval(function() {

    // Obtenir la date et l'heure actuelle
    const now = new Date().getTime();

    // Calculer la différence entre la date de fin et la date actuelle
    const distance = endDate - now;

    // Calculer les jours, heures, minutes, secondes et millisecondes restants
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const milliseconds = distance % 1000;

    // Afficher les résultats dans les éléments correspondants
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("milliseconds").textContent = milliseconds;

    // Si le décompte est terminé, afficher un message
    if (distance < 0) {
        clearInterval(updateCountdown);
        document.getElementById("countdown").innerHTML = "<h1>Les cours sont terminés !</h1>";
    }

}, 1); // Mettre à jour toutes les millisecondes
