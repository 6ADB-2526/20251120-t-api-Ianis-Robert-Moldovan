/**
 * zorg ervoor dat je onderstaande zaken kan verwezelijken met deze API:
 *
 * 1. Alle kinders terug geven
 * 2. Van 1 kind alle info + de id en naam van de geschenkjes
 * 3. Kinderen toevoegen aan te lijst
 * 4. Geschenken kan toevoegen aan het lijstje van een kind
 * 5. Geschenken kan wissen van de lijst van een kind
 *
 * succes!!
 */

// data importeren uit "databank"
const { kindjes: kinderen } = require("../databank/data")

// Alle kinder terug geven
const alleKindjes = (req, res) => {
    res.json(kinderen)
}


// 1 kind alle info + de id en naam van de geschenkjes
const oneKid = (req,res) => {
    const id = req.params.id
    const kind = kinderen.find((k) => k.id == id)
    if (!kind) {
        return res.status(404).json({error: "Kindje niet gevonden"})
    }
    res.json(kind)
}

// kinderen toevoegen
const addKid = (req,res) => {
    const id = getMaxID() + 1
    
    res.json()
}

// geschenk toevoegen aan lijstje van een kind


// geschenk wissen uit lijst van een kind


// Exports 
module.exports = { 
    alleKindjes,
    oneKid,
}