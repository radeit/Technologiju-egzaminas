const backButton = document.getElementById('backButton');
backButton.addEventListener('click', function() {
    history.back(-3);
});