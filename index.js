const server = require("./api/server");

// make the port dynamic
const port = process.env.PORT || 5000;
server.listen(port, () => console.log("server running..."));
