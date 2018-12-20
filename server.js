//requirements
const express = require("express");
const PORT = process.env.PORT || 3001;


//boilerplate

applicationCache.use(express.urlencoded({ extended: true}));
app.use(express.json());

//get assets
if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"))
}

//api's

//app.get
app.get("#", (req, res) => {
res.sendFile(path.join(__dirname, ".client/build/index.html"));
});

// /

app.listen(PORT, () => {
console.log(`Server running on => ${PORT}`)
});