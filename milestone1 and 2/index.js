var toogleButton = document.getElementById('toggle-skills');
var skill = document.getElementById('skills-content');
toogleButton.addEventListener('click', function () {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
        toogleButton.innerText = 'Hide Skills';
    }
    else {
        skill.style.display = 'none';
        toogleButton.innerText = 'Show Skills';
    }
});
