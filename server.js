var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    articleOne : {
        title: 'Article One | Nehal',
        heading:'Article One',
        date: 'Feb 17,2018',
        content: `<p>
                        This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.
                    </p>
                    <p>
                        This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.
                    </p>
                    <p>
                        This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.This is my content for First article.
                    </p>`
    },
    articleTwo:{
        title: 'Article Two | Nehal',
        heading:'Article Two',
        date: 'Feb 18,2018',
        content: `<p>
                        This is my content for 2nd article.
                    </p>`
        
    },
    articleThree:{
        title: 'Article Three | Nehal',
        heading:'Article Three',
        date: 'Feb 19,2018',
        content: `<p>
                        This is my content for 3rd article.
                    </p>`
        
    }
};
function createTemplate(data) {
    var title=data.title;
    var heading=data.title;
    var date=data.title;
    var content=data.content;
    var htmlTemplate=`<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>${heading}</h3>
                <div>
                   ${date}
                    
                </div>
                <div>
                   ${content}
                </div>
            </div>
            
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res){
    res.send(createTemplate(articleOne));   
});
app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
