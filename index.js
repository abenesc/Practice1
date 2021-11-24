const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});

app.post("/", (req, res) => {
  // Add your implementation here 
  let formData = req.body;
  let nameList = formData.fullName;
  let descList = formData.aboutMe;
  let techList = formData.techList;
  let gitList = formData.githubUrl;
  let twitterList = formData.twitterUrl;
  let booksList = formData.favBooks;
  let artistList = formData.favArtist;
  //console.log(gitList)
  res.render('people', {
    fullName: nameList,
    descList: descList
  });
});

app.get("/people/:id", (req, res) => {
  res.render("people", {
    favBooks: newList
  });
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
