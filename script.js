// let diaries = [];
    
// const addDiary = (ev)=>{
// ev.preventDefault();
//     let diary = {
//     id: Date(Date.now()),
//     titles: document.getElementById("diaryTitle").value,
//     paragraphs: document.getElementById("txt").value
// }
// diaries.push(diary);
// document.forms[0].reset();

// // Submission Log
// console.warn('added', {diaries});
// let pre=document.querySelector('#msg pre');
// pre.textContent = JSON.stringify(diary.titles) + " has been added";


//  // If there are two of the same titles
//  let repeatingTitle = 0;
// for (let k = 0; k < localStorage.length; k++) {
    
// if (diary.titles.toString() == localStorage.key(k).toString()) {
//     repeatingTitle++;
//     for (let i = 0; i < localStorage.length; i++) {
//         diary.titles = diary.titles + " " + repeatingTitle;
//     }
// }
// }
// localStorage.setItem(diary.titles, JSON.stringify(diaries));


// }
// document.addEventListener('DOMContentLoaded', ()=> {
//     document.getElementById('createButton').addEventListener('click', addDiary);
// })
// if (localStorage != 0) {
// window.onload = function() {
// for(let j=0; j<localStorage.length;j++) {
//     let local_Key = localStorage.key(j);
//     let local_Get = JSON.parse(localStorage.getItem(local_Key).titles);
// let setJournalName = document.getElementById('listOfJournals').innerHTML;
// setJournalName += local_Get;
// }
// }
// } else {
//     // setJournalName = ''
//     alert('hi');
// }

let myObj = {
    name: 'Olaf',
    age: 30
}

let serializedObj = JSON.stringify(myObj);

localStorage.setItem('myObj', serializedObj);

let deserializedObj = JSON.parse(localStorage.getItem('myObj'));



