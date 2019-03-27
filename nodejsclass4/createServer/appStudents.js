//let http = require("http");no need in express
const express = require("express");
const body_parser = require("body-parser");
const router = express.Router();
let StudentBook = require("./HYFStudents");
const app = express();
const port = 7777;

app.use(body_parser.json());
app.use(router);

let HYFDataBase = new StudentBook([
  {
    name: "Hakki",
    classId: "07",
    email: "adahbour54@gmail.com",
    phone: "(263) 972-6043"
  },
  {
    name: "Keerthika devi Alampalli",
    classId: "08",
    email: "adahbour54@gmail.com",
    phone: "(745) 285-6338"
  },
  {
    name: "Rieko",
    classId: "07",
    email: "adahbour54@gmail.com",
    phone: "(971) 436-6442"
  },
  {
    name: "Sheila Qasemi",
    classId: "08",
    email: "virginrashed4@gmail.com",
    phone: "(457) 527-9154"
  },
  {
    name: "Virgeen",
    classId: "07",
    email: "virginrashed4@gmail.com",
    phone: "(259) 245-5777"
  },
  {
    name: "Abod",
    classId: "07",
    email: "a-hassam@outlook.com",
    phone: "(939) 553-4886"
  },
  {
    name: "Ivan Gray",
    classId: "06",
    email: "mis@sazuja.pm",
    phone: "(548) 420-7322"
  },
  {
    name: "Gordon Fields",
    classId: "08",
    email: "wogzijpeg@jusvijsut.lb",
    phone: "(970) 482-1032"
  }
  
]);

//these 2 lines not needed now may be useful in future
app.use(body_parser.urlencoded({
  extended: true
}));
app.use(body_parser.json()); //check and understand from body parser documentation from internet

app.get("/", (req, res) => res.send("API for HYF"));

router
  .route("/students")
  .get((req, res) => {
    console.log( req);
    if (req.query.name) {
      const student = HYFDataBase.getStudentDetailByName(req.query.name);
      if (student.length > 0) {
        res.send(student);
      } else {
        res.status(404);
      }
    } else {
      res.send(HYFDataBase.getStudentsList());
    }
  })

  .post((req, res) => {
    //console.log(req.body);
    HYFDataBase.addStudent(req.body, (sucessCallback, errcallBack) => {
      if (sucessCallback) {
        res.status(201);
        res.send('sucessful');
      } else if (errcallBack) {
        res.status(401);
        res.send(errcallBack);
      } else {
        res.status(400);
        res.send("invalid request");
      }
    });
  })

  .put((req, res) => {
    res.send(res.body);
  })
  .delete((req, res) => {
    res.send(res.body);
  });

app.listen(port, () => console.log(`HYF app listening to ${port}!`));

/* let server = http.createServer(function(req, res) {
  //console.dir(req,{depth:1});returns an req object with list of keys methods etc

  console.log(req.url);
  let url = req.url;
  //const newStudent = req.body;
  console.log("send response to client..");

  if (url == "/getStudentsList") {
    const statusOfAction = HYFDataBase.getStudentsList();
    //checking status (getStudentsList function returned)
    if (statusOfAction) {
      //check status code
      res.statusCode = 201;
      res.end("student " + url+" "+status + "done");
    } else {
      res.statusCode = 400;
      res.end("student " + url + " failure");
    }
  } else if (url == "/addStudentDetails" && req.method == "POST") {
    //res.end("request type:" + req.method);

    const statusOfAction = HYFDataBase.addStudentDetails({
      name: "Pragathi",
      classId: 07,
      email: "kkkk@mail.com",
      phone: 1234
    });
    // checkStatus
    if (statusOfAction) {
      //check status code
      res.statusCode = 201;
      res.end("student added");
    } else {
      res.statusCode = 400;
      res.end("student already exist");
    }
  } else if (url == "/getListByClass" && req.method == "GET") {
    const statusOfAction = HYFDataBase.getListByClass();
    //checking status (getListByClass function returned)
    if (statusOfAction) {
      //check status code
      res.statusCode = 201;
      res.end("Class list found");
    } else {
      res.statusCode = 400;
      res.end("class list not found");
    }
  } else if (url == "/getStudentDetailByName" && req.method == "GET") {
    const statusOfAction = HYFDataBase.getStudentDetailByName("Hakki");
    //checking status (getStudentDetailByName function returned)
    if (statusOfAction) {
      //check status code
      res.statusCode = 201;
      res.end("student details found ");
    } else {
      res.statusCode = 400;
      res.end("student not found");
    }
  } else if (url == "/editStudentInfo" && req.method == "PUT") {
    const statusOfAction = HYFDataBase.editStudentInfo({
      name: "Keerthika devi Alampalli",
      classId: 07,
      email: "adahbour54@gmail.com",
      phone: "(745) 285-6338"
    });
    if (statusOfAction) {
      //check status code
      res.statusCode = 204;
      res.end("student Details modified");
    } else {
      res.statusCode = 400;
      res.end("failure!...student not found");
    }
  } else if (url == "/deleteStudentFromHYF" && req.method == "DELETE") {
    //console.log(req.method);
    const statusOfAction = HYFDataBase.deleteStudentFromHYF("Virgeen");
    //checking status (deleteStudentFromHYF function returned)
    if (statusOfAction) {
      //check status code
      res.statusCode = 204;
      res.end("student deleted");
    } else {
      res.statusCode = 400;
      res.end("Failure! student not found");
    }
  } else {
    res.end("You r in homepage localhost:7337");
  }
});

//server.use(body_parser);
server.listen(7337, function() {
  console.log("port:7337");
}); */
