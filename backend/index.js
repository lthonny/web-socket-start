require("dotenv").config().parsed;

const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

// io.emit("some event", {
//   someProperty: "some value",
//   otherProperty: "other value",
// });

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
