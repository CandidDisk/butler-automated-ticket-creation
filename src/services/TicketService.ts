import {Ticket} from "../models/TicketInterface";
import {validateTicket} from "../utils/validationUtils";

const createTicket = (ticket: Ticket) => {
    try {
        const validate = validateTicket(ticket)
        if (validate.invalid) {
            return {
                status: {code: 400, error: true},
                body: {message: `Bad request: ${validate.missingParam ? 'ticket missing parameter' : 'ticket parameter type invalid'}`}
            }
        }

        const newTicket: Ticket = {
            title: ticket.title,
            tel: ticket.tel,
            ...(ticket.description && {
                description: ticket.description
            }),
            ...(ticket.file && {
                file: ticket.file
            })
        }
        return {status: {code: 200, error: false}, body: {ticket: newTicket}}
    } catch (e) {
        return {status: {code: 400, error: true}, body: e}
    }
}

export {createTicket}
