var tooglebutton = document.getElementById('toggle');
var skills = document.getElementById('skills');
tooglebutton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
