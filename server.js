const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const spaceXSchema = require("./schema.js");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: spaceXSchema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
