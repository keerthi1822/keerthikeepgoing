let http = require("http");
let StudentBook = require("./students.");
let HYFDataBase = new StudentBook();
let server = http.createServer(function(req, res) {
  //console.dir(req,{depth:1});returns an req object with list of keys methods etc

  //console.log(req.url);
  let url = req.url;
  console.log("send response to client..");
  if (url == "/getList") {
    res.end(JSON.stringify(HYFDataBase.getList()));
  } else if (url == "/getStudentByClass") {
    res.end(JSON.stringify(HYFDataBase.getStudentByClass()));
  } else {
    res.end("not found");
  }
});

server.listen(7777, function() {
  console.log("port:7777");
});
