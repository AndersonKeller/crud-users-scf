import { loginRouter } from "./routes/login.routes";
import { usersRouter } from "./routes/users.routes";
import { userRouter } from "./routes/user.routes";
var express = require("express");
var bodyParser = require("body-parser");
import { Request, Response } from "express";
import { handleErrors } from "../errors";
var app = express();

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req: Request, res: Response) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});
app.use("/user", userRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
// app.get("/user", teste1.getUser);
// app.get("/users", teste1.getUsers);
// app.post("/users", teste2);
// app.delete("/users", teste3);
// app.put("/users", teste4);
// app.get("/users/access", teste5);
app.use(handleErrors);
const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
