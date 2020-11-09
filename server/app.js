const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;
const mongoDBAtlasURL =
  "mongodb+srv://graphql:graphql123@cluster0.ritdv.mongodb.net/<dbname>?retryWrites=true&w=majority";

// connect to mongodb database
mongoose
  .connect(mongoDBAtlasURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log("Error: ", err.message));
mongoose.connection.once("open", () => console.log("Connected to MongoDB."));

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));

app.listen(PORT, () => console.log("Listening on port " + PORT + "..."));
