"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const User = require("../models/userModel");

module.exports = async (req, res, next) => {
  // ? We keep our user details in session.
  if (req?.session?.id) {
    const { id, password } = req.session;

    //Find the user in our User Model and declare as a user.
    const user = await User.findOne({ _id: id }); //setpassword encript auto works with find.
    // Don't need to encript again

    if (user && user.password == password) {
      req.user = user; //with req it is global now.
      req.isLogin = true;
    } else {
      req.session = null;
      req.isLogin = false;
    }
  }
  next();
};
