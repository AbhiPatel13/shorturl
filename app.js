const express = require("express");
const app = express();
var shortUrl = require('node-url-shortener');
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT ||  8000 ;

const mainpath = path.join(__dirname,"../SHORTENURLPROJECT");

const viewspath = path.join(__dirname,"../SHORTENURLPROJECT/views");
// console.log(viewspath);
app.use(express.static(mainpath));

app.set("view engine","hbs");

app.set("views",viewspath);

app.get("/",(req,res)=>{
    res.render("index.hbs");
   
});


app.get("/getshortlink",(req,res)=>{

 shortUrl.short(req.query.url, function(err, url){
      const  xyz =  url;
      res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Short URL</title>
              <!-- Font Awesome -->
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
      <!-- Google Fonts -->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
      <!-- Bootstrap core CSS -->
      <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
      <!-- Material Design Bootstrap -->
      <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">
      </head>
      <body>
      
          <div class="container" style="margin-top:30px" >
              <h1>Short URL </h1>
              <form action="/getshortlink" method="GET">
      
                  <div class="md-form">
                      <input type="text" id="url" class="form-control" name="url" value="${req.query.url}">
                     <span id="copy" style="display:none">${url}</span>
                      <label for="url">Enter Link Here</label>
                    </div>
              
                    <button type="submit" class="btn btn-outline-default btn-rounded waves-effect" value="submit">GET SHORT LINK </button>
                  
              
      
              </form>
              <div class="alert alert-info" role="alert" style="margin-top:30px">
              Your Shorten URL is = <a href="${url}" class="alert-link" target="_blank" >${url}</a>
</div>
</div>
              
            
      
<script>
function copy(){
    var copyTextarea = document.getElementById("copy");
    copyTextarea.select(); 
    document.execCommand("copy"); 
    alert("Success");
  
}
</script>
         
      
          <!-- JQuery -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <!-- Bootstrap tooltips -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
      <!-- Bootstrap core JavaScript -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
      <!-- MDB core JavaScript -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>
          
      </body>
      </html>`);
      

    });


})
app.listen(port,()=>{
    console.log("Server Started SuccessFully");
})

