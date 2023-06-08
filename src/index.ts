import express, { Application, Request, Response } from 'express';

const app: Application = express();

const tickets = require("./routes/tickets");

const PORT: number = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tickets", tickets)

app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

try {
    app.listen(PORT, (): void => {
        console.log(`Connected successfully on port ${PORT}`);
    });
} catch (error) {
    console.error(`Error occured: ${error}`);
}
