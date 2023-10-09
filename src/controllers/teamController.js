const Team = require("../models/team");

const addTeam = async (req, res) => {
  try {
    const user = new Team(req.body);
    const createTeam = await user.save();
    res.status(201).send(createTeam);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

const getAllTeams = async (req, res) => {
  try {
    const teamsData = await Team.find();
    res.status(200).send(teamsData);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
  // const teamsData =
  res.send();
};

const getTeamByID = async (req, res) => {
  try {
    const param = req.params.name;
    console.log(req.params);
    const specificTeam = await Team.find({ name: param });
    res.status(201).send(specificTeam);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

const deleteTeam = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("delte Id", id);
    const deltedTeam = await Team.findByIdAndDelete({ _id: id });
    res.status(200).send(deltedTeam);
  } catch (err) {
    res.status(400).send(err);
  }
};

const updateTeam = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log("my id", _id);
    const updateTeam = await Team.findByIdAndUpdate(_id, req.body);
    res.send(updateTeam);
  } catch (error) {
    res.status(404).send(err);
  }
};

module.exports = {
  getAllTeams,
  getTeamByID,
  addTeam,
  deleteTeam,
  updateTeam,
};
