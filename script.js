let diaries = [];
    
const addDiary = (ev)=>{
ev.preventDefault();
    let diary = {
    id: Date.now(),
    titles: document.getElementById("diaryTitle").value,
    paragraphs: document.getElementById("txt").value
}
diaries.push(diary);
// document.querySelector('form').reset();
document.forms[0].reset();

console.warn('added', {diaries});
let pre=document.querySelector('#msg pre');
pre.textContent = '\n' + JSON.stringify(diaries, '\t', 2);
}
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('createButton').addEventListener('click', addDiary);
})
