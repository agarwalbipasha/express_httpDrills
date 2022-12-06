const express = require("express");
const app = express();
const port = 3000;
const status = require("./routers/status");
const delay = require("./routers/delay");


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.static("/public"));

app.use("/status", status);
app.use("/delay", delay);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get("/html", (req, res) => {
  res.sendFile(__dirname + "/public/main.html");
});

app.get("/json", (req, res) => {
  res.sendFile(__dirname + "/public/data.json");
});

app.get("/uuid", (req, res) => {
  res.sendFile(__dirname + "/public/uuid.json");
});

// router.get("/status/:statusCode", (req, res) => {
//   res.status(req.params.statusCode).send();
// });
