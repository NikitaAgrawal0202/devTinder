const express = require("express");

const app = express();

app.use("/test",(req, res) => {
    res.send("Hello from /test");
})

app.use("/user",(req, res) => {
    res.send("Hello from /user");
})

app.use((req, res) => {
    res.send("Hello from express server");
})
app.listen(3000, () => {
    console.log("server is successfully running on port 3000");
});