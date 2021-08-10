function placeAnOrder(orderNumber) {
    console.log("Customer order: ", orderNumber)

    cookAndDeliverFood(function(){
        console.log("Deliver food order: ", orderNumber);
    })
}

// simulate a 5 second operation
function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);
}

// simulate users web requests
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);

////////////////////////////////
let Bucky = {
    favFood: "bacon",
    favMovie: "Chappie"
}
// reference to object
let Person = Bucky;
Person.favFood = "salad";
console.log(Bucky.favFood) // = salad


/////////////////////////////
let Bucky = {
    printFirstName: function() {
        console.log("My name is Bucky");
        console.log(this === Bucky); // who is calling func
    }
}
Bucky.printFirstName()
function doSomethingWorthless() {
    console.log("\nI am worthless")
    console.log(this === global)
}
doSomethingWorthless()


//////////////////// prototyping
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        this.life -= 1;
        console.log(this.name + " give 1 life to " + targetPlayer.name);
    }
}

let Bucky = new User();
let Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";
Bucky.giveLife(Wendy);

console.log("Bucky's life: ", Bucky.life);
console.log("Wendy's life: ", Wendy.life);

User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name, " just uppercutted ", targetPlayer.name);
}

Wendy.uppercut(Bucky);
console.log("Bucky's life: ", Bucky.life);
console.log("Wendy's life: ", Wendy.life);

User.prototype.magic = 60;

console.log(Bucky.magic)
console.log(Wendy.magic)

///////////////////////////////////

//// modules ////

// file movies.js
module.exports = {
    printAvatar: function () {
        console.log("Avatar: PG-13");
    },

    printChappie: function () {
        console.log("Chappie: R");
    }
};

/*
function printAvatar() {
    console.log("Avatar: PG-13");
}

function printChappie() {
    console.log("Chappie: R");
}

module.exports.avatar = printAvatar; // without () !!!
module.exports.chappie = printChappie;
*/

// main file
let movies = require('./movies');

movies.printAvatar();
movies.printChappie();

/////////////////////


// object factory => creates new object every time
module.exports = function() {
    return {
        favMovie: ""
    }
}
///////////
////////// modules
let fs = require("fs") // file system module

fs.writeFileSync("corn.txt", "Corn is good!")
console.log(fs.readFileSync("corn.txt").toString())

//////////////
///////// path module

let path = require("path")

let websiteHome = "Desktop/frontend/index.html";
let websiteAbout = "Desktop/frontend/script.js";

console.log(path.normalize(websiteAbout));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

////////////////////////

///// setInterval
setInterval( function() {
    console.log("Beef");
}, 1000);

//////////////////////
console.log(__dirname);
console.log(__filename);

/////////////////////////

////////// server:
let http = require("http")

function onRequest(request, response) {
    console.log("A user made a request!", request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Here is some data")
    response.end()
}

http.createServer(onRequest).listen(8888);
console.log("Server running!");

////////////////////////////////////
/// other way to run server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

////////////////////////

///better server

let http = require("http")
let fs = require("fs")

// 404 response
function send404Response(response) {
    response.writeHead(404, {"Context-Type": "text-plain"});
    response.write("Error 404: Page not found");
    response.end();
}

// handle user request
function onRequest(request, response) {
    if ( request.method === "GET" && request.url === "/") {
        response.writeHead(200, {"Context-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    } else {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server running!");

/////////////////
//// connect next()
let connect = require("connect");
let http = require("http");

let app = connect();

function doFirst(request, response, next) {
    console.log("Bacon");
    next();
}

function doSecond (request, response, next) {
    console.log("Tuna!");
    next();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("server is running....");

////////////////

let connect = require("connect");
let http = require("http");

let app = connect();

function profile(request, response) {
    console.log("User requested profile.");
}
function forum(request, response) {
    console.log("User requested forum.");
}

app.use("/profile", profile);
app.use("/forum", forum)

http.createServer(app).listen(8080);
console.log("server is running....");

/////////////////////////////////////////

/////////////////////////////////////////





