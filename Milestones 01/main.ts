const tooglebutton = document.getElementById('toggle') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

tooglebutton.addEventListener('click', ()=> {
    if(skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});