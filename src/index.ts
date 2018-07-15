import * as fastify from "fastify";

const app = fastify();

app.get("/", async (req, res) => res.send("hello!"));

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3030;

app.listen(port, () => console.log(`listening on ${port}`));
