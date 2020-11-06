import * as express from 'express';
import apiRouter from './routes'
import * as path from "path"
const app = express();

app.use(express.json())
app.use(express.static('public'));
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, "../src/client")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
