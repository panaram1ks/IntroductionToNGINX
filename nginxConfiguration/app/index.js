const app = require("express")();
const os = require("os")
const hostname = os.hostname();

app.get("/", (req, res) => res.send("Hello from " + hostname ))
app.listen(9999, () => console.log("listening on 9999"))