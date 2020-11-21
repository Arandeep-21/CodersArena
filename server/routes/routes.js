const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const axios = require("axios");
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
};
