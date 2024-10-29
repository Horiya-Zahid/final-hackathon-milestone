const toogleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skill = document.getElementById('skills-content') as HTMLElement

toogleButton.addEventListener('click', function() {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
        toogleButton.innerText = 'Hide Skills';
    } else {
        skill.style.display = 'none';
        toogleButton.innerText = 'Show Skills';
    }
});