const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const PORT = 4000;

app.use("/graphql", graphqlHTTP({}));

app.listen(PORT, () => console.log("Listening on port " + PORT + "..."));
