const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const axios = require("axios");
const Messages = mongoose.model("chats");
var i = 10;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("hello world");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/error" }),
    function (req, res) {
      res.redirect("http://localhost:3000/home");
    }
  );
  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log(req.query);
    console.log("Logged out");
    res.redirect("http://localhost:3000/");
  });

  app.get("/api/current_user", (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });

  app.get("/api/problems_data", async (req, res) => {
    console.log(req.query.handle);
    try {
      let name = req.query.handle;
      const { data } = await axios.get(
        `https://codeforces.com/api/user.status`,
        {
          params: {
            handle: name,
            from: 1,
            count: 10000,
          },
        }
      );
      const totalResults = data.result;
      let cntOK = 0,
        cntNotOK = 0,
        totalCount = 0,
        ratingRange = 0,
        tagArray = [];
      let ratingForTags = {};
      totalResults.map((obj) => {
        const { tags, rating } = obj.problem;
        const { verdict } = obj;
        tagArray.push(tags);

        if (verdict === "OK") {
          cntOK += 1;
          if (rating) {
            ratingRange += rating;
          }
        } else cntNotOK += 1;
        totalCount += 1;
      });
      console.log(cntOK);
      console.log(cntNotOK);
      console.log(ratingRange);
      res.send(cntOK.toString());
    } catch (err) {
      res.send(err);
    }
  });

  app.get("/api/messages/sync", async (req, res) => {
    Messages.find((err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send(data);
      }
    });
  });
  app.post("/api/messages/new", async (req, res) => {
    const message = req.body;
    console.log(message);
    Messages.create(message, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  });
  app.get("/api/cnts", async (req, res) => {
    try {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;
      var currentTime = new Date();
      var currentOffset = currentTime.getTimezoneOffset();
      var ISTOffset = 330;
      var ISTTime = new Date(
        currentTime.getTime() + (ISTOffset + currentOffset) * 60000
      );
      var hoursIST = ISTTime.getHours();
      var minutesIST = ISTTime.getMinutes();
      if (hoursIST < 10) hoursIST = hoursIST.toString() + "0";
      if (minutesIST < 10) minutesIST = minutesIST.toString() + "0";
      let last = today + "T" + hoursIST + ":" + minutesIST + ":00";

      const { data } = await axios.get("https://clist.by:443/api/v1/contest/", {
        params: {
          limit: 35,
          username: "lokesh011101",
          api_key: "f53082078e78b3559785d640dce0b794f65336f8",
          start__gte: new Date(),
          order_by: "end",
        },
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  });
};
