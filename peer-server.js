const { PeerServer } = require("peer");

const port = process.env.PORT || 9000;

const server = PeerServer({
  port: port,
  path: "/shogi",
});

console.log(`PeerJS signaling server running on port ${port}, path /shogi`);
