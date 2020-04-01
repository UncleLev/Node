const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//     if (err) throw new Error(err);

//     console.log("new dir");
// });

// fs.writeFile(path.join(__dirname, "notes", "myNote.txt"), "uwiiiiii", (err) => {
//     if (err) throw err;

//     console.log("file");
//     fs.appendFile(
//         path.join(__dirname, "notes", "myNote.txt"),
//         "`add new",
//         (err) => {
//             if (err) throw err;
//         }
//     );
//     fs.readFile(
//         path.join(__dirname, "notes", "myNote.txt"),
//         "utf-8",
//         (err, data) => {
//             if (err) throw err;
//             console.log(data);
//         }
//     );
// });

fs.rename(path.join(__dirname, "notes", "myNote.txt"),path.join(__dirname, "notes", "Note.txt"), err=>{
    if (err) throw err
    console.log('rename');
    
})
