const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku
const data = { imie: "Mateusz", nazwisko: "Lichoń", klasa: "3I1", grupa: "2" }

app.get("/data", function (req, res) {
    res.send(data)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})