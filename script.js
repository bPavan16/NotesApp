const addbtn = document.querySelector("#addNote");
const main = document.querySelector("#main");

const SaveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  const data = [];
  notes.forEach((element) => {
    data.push(element.value);
  });

  //   console.log(data)

  if (data.length == 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
};

addbtn.addEventListener("click", function () {
  // console.log("Button is clicked")
  addNote();
});

const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool">
  <i class=" trashB fa-solid fa-trash"></i>
  <i class=" savefile fa-regular fa-floppy-disk"></i>
    </div>
    <textarea>${text}</textarea> `;

//   main.appendChild(note);

  note.querySelector(".trashB").addEventListener("click", function () {
    note.remove();
    SaveNotes();
  });

  note.querySelector(".savefile").addEventListener("click", function () {
    SaveNotes();
  });

  note.querySelector("textarea").addEventListener("focusout", function () {
    SaveNotes();
  });

  main.appendChild(note);
  SaveNotes();



};

(function () {
  const LSnotes = JSON.parse(localStorage.getItem("notes"));
  //   console.log(LSnotes);

  if (LSnotes === null) {
    addNote();
  } else {
    LSnotes.forEach((LSNOTE) => {
      addNote(LSNOTE);
    });
  }

})();
