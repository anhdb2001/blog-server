const express = require('express');
const dbConnect = require("./db/dbConnect")
const app = express();
dbConnect()
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use("/api", PostRouter)

const BlogPosts = require('./BlogPosts');

app.get('/', function(red, res){
    res.send("Server is working!");
})
app.get('/posts', function (req, res){
    res.send(JSON.stringify(BlogPosts.BlogPosts));
})

app.listen(8080, function(){
    console.log("Server is running on 8080!");
});