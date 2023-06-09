import express, { Request, Response } from 'express';
import {Ticket} from "../models/TicketInterface";
import {postTicket} from "../controllers/TicketController";

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
    res.status(200).send({
        message: "Tickets!",
    });
})

router.post("/post-ticket", postTicket)

module.exports = router;
