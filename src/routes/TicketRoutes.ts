import express, { Request, Response } from 'express';
import {Ticket} from "../models/TicketInterface";
import {getTicket, postTicket} from "../controllers/TicketController";

const router = express.Router()

router.get("/", getTicket)

router.post("/post-ticket", postTicket)


module.exports = router;
