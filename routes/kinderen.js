const express = require("express")
const ctrlKinderen = require("../controllers/kinderen")

// maak router object aan
const routes = express.Router();

// maak de verschillende routs aan
routes.get("/", ctrlKinderen.alleKindjes)
routes.get("/oneKid/:ID", ctrlKinderen.oneKid)
routes.put("/addKid", ctrlKinderen.addKid)
routes.put("/geschenkToevoegenKindje", ctrlKinderen.geschenkToevoegenKindje)
routes.delete("/geschenkVerwijderenKindje", ctrlKinderen.geschenkVerwijderenKindje)

// exporteer het router object
module.exports = routes;
