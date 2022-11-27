// let diaries = [];
    
// const addDiary = (ev)=>{
// ev.preventDefault();
//     let diary = {
//     id: Date(Date.now()),
//     titles: document.getElementById("diaryTitle").value,
//     paragraphs: document.getElementById("txt").value
// }
// diaries.push(diary);
// // document.querySelector('form').reset();
// document.forms[0].reset();

// console.warn('added', {diaries});
// let pre=document.querySelector('#msg pre');
// pre.textContent = localStorage.getItem(JSON.stringify(diaries.titles)) + " has been added";

// localStorage.setItem('JournalDocuments', JSON.stringify(diaries));

// }
// document.addEventListener('DOMContentLoaded', ()=> {
//     document.getElementById('createButton').addEventListener('click', addDiary);
// })
window.onload = function() {
let addThis = "";
let andThis = "";

for (let i = 0; i < 10; i++) {
addThis = i + "Olafs";
andThis = i + "Newbs";
const createValue = localStorage.setItem(addThis, andThis);

}
for (let t = 0; t < localStorage.length; t++) {
    const keyThis = localStorage.key(t);
    const keyOf = localStorage.getItem(keyThis);
document.getElementById('listOfJournals').innerHTML += `${keyOf} <br>`;

}
let tryThis = localStorage.key(0);
let tryThisAlso = localStorage.getItem(tryThis);

alert(tryThis +" " +  tryThisAlso);
}
