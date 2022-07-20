let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

if (window.location.pathname === '/Develop/public/notes.html') {
  noteTitle = document.querySelector('.note-title');
  noteText = document.querySelector('.note-textarea');
  saveNoteBtn = document.querySelector('.save-note');
  newNoteBtn = document.querySelector('.new-note');
  noteList = document.querySelectorAll('.list-container .list-group');
}

// Hides element
const hide = (elem) => {
  elem.style.display = 'none';
};

// Shows element
const show = (elem) => {
  elem.style.display = 'inline';
};

// keeps track of the note in the text area
let activeNote = {};

// get notes request
const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const saveNote = (note) =>
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

  });

  const saveNote = (note) =>
   fetch('/api/notes',{
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(note),
   });

   //save note
   const handleNoteSave = () => {
     const newNote = {
       title: noteTitle.value
       text: noteText.value
     };
     saveNote(newNote).then(() => {
       getAndRenderNotes();
       renderActiveNote();
     });
   };










    
getAndRenderNotes();