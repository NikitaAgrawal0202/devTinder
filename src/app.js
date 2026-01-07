const express = require("express");

const app = express();

app.get("/user",(req, res) => {
    res.send({firstName: "Nikita", lastName: "Agrawal"});
},
(req, res) => {
    console.log("This is second callback");
    }
    );

app.post("/user",(req, res) => {
    res.send("Post request received");
});

app.delete("/user",(req, res) => {
    res.send("delete request received");
});

app.use("/user",(req, res) => {
    res.send("Hello from /user");
})

app.use((req, res) => {
    res.send("Hello from express server");
})
app.listen(3000, () => {
    console.log("server is successfully running on port 3000");
});