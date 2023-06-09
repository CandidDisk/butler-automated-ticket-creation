import {NextFunction, Request, RequestHandler, Response, response} from 'express';
import {Ticket} from "../models/TicketInterface";
import {createTicket} from "../services/TicketService";

const postTicket: RequestHandler = (req: Request<{}, {}, Ticket>, res: Response, next: NextFunction) => {
    try {
        const response = createTicket(req.body)
        res.status(response.status.code).send(response.body)
    } catch (e) {
        res.status(500).send(e)
    }
}


export { postTicket }
