let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let listNotes;

if (window.location.pathname === '/Develop/public/notes.html') {
  noteTitle = document.querySelector('.note-title');
  noteText = document.querySelector('.note-textarea');
  saveNoteBtn = document.querySelector('.save-note');
  newNoteBtn = document.querySelector('.new-note');
  listNotes = document.querySelectorAll('.list-container .list-group');
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

   //add stop function for click listener for note buttons? 

   //display new note
   const handleNewNoteView = (e) => {
     e.preventDefault();
     activeNote = JSON.parse(e.target.parentElement.getAttribute('data-note'));
     renderActiveNote();
   };

   //allow user to enter a new note
   const handleNewNoteView = (e) => {
     activeNote = {};
     renderActiveNote();
   };

   //double check this when get a chance
  //  const handleRenderSaveBtn = () => {
  //    if (!noteTitle.value.trim() || !noteText.value.trim()) {
  //      hide (saveNoteBtn);
  //    } else {
  //      show(saveNoteBtn);
  //    }
  //  };

  // show list of new note titles
  const renderNoteList = async (notes) => {
    let json.Notes = await notes.json();
    if (window.location.pathname === '/notes') {
      listNotes.forEach((el) => (el.innerHTML = ''));
    }

    let noteItemList = [];

    //return HTML element
    const createLi = (text = true) => {
      const liEl = document.createElement('li');
      liEl,classList.add('list-group-item');

      const spanEl = document.createElement('span');
      spanEl.classList.add('list-item-title');
      spanEl.innerText = text;
      spanEl.addEventListener('click, handleNoteView');

      liEl.append(spanEl);
    }
    return liEl;
  };

jsonNotes.forEach((note) => {
  li.dataset.note = JSON.stringify(note);

  noteItemList.push(li);
});

if (window.location.pathname === '/notes') {
  noteItemList.forEach((note) => listNotes[0].append(note));
};

//show notes on the side from db
const showNotes = () => getNotes().then(renderNoteList);

if (window.location.pathname === '/notes') {
  noteTitle.addEventListener('keyup', handleRenderSaveBtn);
  noteText.addEventListener('keyup', handleRenderSaveBtn);
  newNoteBtn.addEventListener('click', handleNewnoteView);
  saveNoteBtn.addEventListener('click', handleNoteSave);
}

showNotes();










    
getAndRenderNotes();