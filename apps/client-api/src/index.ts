import http from "http";
import { bootstrap } from "./bootstrap";
import chalk from "chalk";


(async () => {
  const server = http.createServer;
  const port = process.env.PORT || 3002;

  const app = await bootstrap();

  server(app).listen(port, () => {
    console.log(`Server listens on ${ chalk.blue("http://localhost:"+port) }`);
  })
})()

