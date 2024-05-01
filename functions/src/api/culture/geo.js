const express = require("express");
const geoData = require("../../data/geo-data.json"); // Proper path to your JSON data

const geoRouter = express.Router();
// Route to get geographic data
geoRouter.get("/geo/hierarchy/flights/locale", (req, res) => {
  try {
    res.status(200).send(geoData);
  } catch (error) {
    console.error(error); // Good practice to log the error
    res.status(500).send({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
});

module.exports = geoRouter;
