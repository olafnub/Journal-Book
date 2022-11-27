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
pre.textContent = diary.titles + " has been added";

const todaysToString = diary.id.toString();
const todaysDate = todaysToString.slice(0, 15);
const returnJournal = diary.titles + " || " + todaysDate;
document.getElementById('listOfJournals').innerHTML = returnJournal;

localStorage.setItem('JournalDocuments', JSON.stringify(diaries));
}
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('createButton').addEventListener('click', addDiary);
})
