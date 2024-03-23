"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

module.exports = {
  isAdmin: (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      console.log(req.user.isAdmin);
      next();
    } else {
      // res.errorStatusCode = 403;
      throw new Error("No Permission: You must be an admin");
    }
  },
};
