const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Task 1", "Task 2", "Task 3"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

let today = new Date();

let option = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
};

let day = today.toLocaleDateString("en-US", option)


res.render('list', {listTitle: day, newListItems: items});

});

app.post("/", function(req, res) {

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        
        res.redirect("/work");
    } else {
        items.push(item);

        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work", newListItems: workItems});
});

app.listen(3000, function(){
    console.log("Server is Online!");
})