// var funcs = [];
// // let's create 3 functions
// for (let i = 0; i < 3; i++) {
//   // and store them in funcs
//   funcs[i] = function() {
//     // each should log its value.
//     console.log("My value: " + i);
//   };
// }
// for (var j = 0; j < 3; j++) {
//   // and now let's run each one to see
//   funcs[j]();
// }


notes = [
  {
    id: 1,
    body: "Note 1"
    },
    {
      id:2,
      body: "Note 2"
    },
    {
      id:3,
      body: "Note 3"
    },
    {
      id:4,
      body: "Note 4"
    }

]

currentId = 4

const newNotes = [...notes.filter(note =>note.id === currentId), ...notes.filter(note =>note.id !== currentId)]

console.log(newNotes)


