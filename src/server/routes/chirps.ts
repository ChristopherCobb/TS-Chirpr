import * as express from "express";
import {
  GetChirp,
  GetChirps,
  CreateChirp,
  UpdateChirp,
  DeleteChirp,
} from "../utils/chirpstore.js";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  let data = GetChirps()
  delete data.nextid
  const chirps = Object.keys(data).map((key) => {
    return {
      id: key,
      username: data[key].username,
      message: data[key].message,

    }
  })
  chirps.pop()
    res.json(chirps);
});

router.get("/:id?", (req: express.Request, res: express.Response) => {
  const id: string = req.params.id;
  res.send(GetChirp(id));
 
});

router.post("/", (req: express.Request, res: express.Response) => {
  const chirpObj: chirp = {
    username: req.body.name,
    message: req.body.message,
  };

  CreateChirp(chirpObj);
  res.sendStatus(200);
});

router.put("/:id", (req: express.Request, res: express.Response) => {
  const id= req.params.id;
  const chirpObj: chirp = {
    username: req .body.name,
    message: req.body.message
};
  UpdateChirp(id, chirpObj);

  res.sendStatus(200);
});

router.delete("/:id", (req: express.Request, res: express.Response) => {
  let id: string = req.params.id;
  DeleteChirp(id);

  res.sendStatus(200);
});

interface chirp {
  username: string,
  message: string
}

export default router;
