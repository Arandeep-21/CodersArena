const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./models/models");
require("./services/PassportOauth");
const keys = require("./config/keys");
const path = require("path");
const Pusher = require("pusher");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const pusher = new Pusher({
  appId: "1110864",
  key: "8d3361db75fa48d92ab2",
  secret: "f4b9a06fe0721311515f",
  cluster: "eu",
  useTLS: true,
});
const db = mongoose.connection;
db.once("open", () => {
  const msgs = db.collection("chats");
  const changeStream = msgs.watch();
  console.log("chat db connected");

  changeStream.on("change", (change) => {
    console.log("a change occured", change);
    if (change.operationType === "insert") {
      const msgDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: msgDetails.name,
        message: msgDetails.message,
        timeStamp: msgDetails.timeStamp,
        received: msgDetails.received,
      });
    } else {
      console.log("error in pusher");
    }
  });
});

app.use(
  cors({
    origin: "http://localhost:3000",
    // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);
app.use(morgan("dev"));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "html");
require("./routes/routes.js")(app);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("App listening on port " + port));
