let body=document.body;
let Profile=document.querySelector('.header .flex .profile');
document.querySelector('#user-btn').onclick= () =>{
    Profile.classList.toggle('active');
    // searchform.classList.remove('active');
}
let searchform=document.querySelector('.header .flex .profile');
document.querySelector('#search-btn').onclick= () =>{
    searchform.classList.toggle('active');
    Profile.classList.remove('active');
}
let sideBar= document.querySelector('.side-bar');
document.querySelector('#menu-btn').onclick= () =>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}
// close-bar
document.querySelector('.side-bar .close-bar').onclick= () =>{
    sideBar.classList.remove('active');
    body.classList.remove('active');
}
window.onscroll = () =>{
    Profile.classList.remove('active');
    searchform.classList.remove('active'); 
    if(window.innerWidth<1200){
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }  
}
// toggle-bar
let toggleBtn=document.querySelector('#toggle-btn');
let darkmode=localStorage.getItem('dark-mode');
const enabledarkMode=()=>{
    toggleBtn.classList.replace('fa-sun','fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode','enabled');
}
const disabledarkMode=()=>{
    toggleBtn.classList.replace('fa-moon','fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode','disabled');
}
if(darkmode=='enabled'){
    enabledarkMode();
}
toggleBtn.onclick=(e)=>{
    let darkmode=localStorage.getItem('dark-mode');
    if(darkmode==='disabled'){
        enabledarkMode();
    } else{
        disabledarkMode();
    }
}

// FAQ
document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
