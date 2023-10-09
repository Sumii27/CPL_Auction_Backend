const express = require("express");
const router = express.Router();
const controllers = require("../controllers/teamController");
// post request
router.post("/", controllers.addTeam);

// get request
router.get("/", controllers.getAllTeams);

// get specific team data
router.get("/:name", controllers.getTeamByID);

// delete request
router.delete("/:id", controllers.deleteTeam);

// update request

router.patch("/:id", controllers.updateTeam);

module.exports = router;
