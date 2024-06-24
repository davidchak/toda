import express from "express";


const bootstrap = async () => {
  const app = express();

  app.get("/", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json({
      status: "success"
    })
  })

  return app;
}

export {
  bootstrap
}
