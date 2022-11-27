let diaries = [];
    
const addDiary = (ev)=>{
ev.preventDefault();
    let diary = {
    id: Date(Date.now()),
    titles: document.getElementById("diaryTitle").value,
    paragraphs: document.getElementById("txt").value
}
diaries.push(diary);
// document.querySelector('form').reset();
document.forms[0].reset();

console.warn('added', {diaries});
let pre=document.querySelector('#msg pre');
pre.textContent = localStorage.getItem(JSON.stringify(diaries.titles)) + " has been added";

localStorage.setItem(diary.titles, JSON.stringify(diaries));


}
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('createButton').addEventListener('click', addDiary);
})

