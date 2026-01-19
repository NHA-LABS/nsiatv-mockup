console.log("Maquette NSIA TV chargée");

// Exemple interaction future
document.querySelectorAll(".card.video").forEach(card => {
    card.addEventListener("click", () => {
        alert("Lecture du replay (maquette)");
    });
});
