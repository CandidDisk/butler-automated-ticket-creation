import {Ticket} from "../models/TicketInterface";
import {checkDuplicates, validateTicket} from "../utils/validationUtils";
import {getTicketsFromJson, writeTicketToJson} from "../utils/readJson";

const createTicket = async (ticket: Ticket) => {
    const ticketJson = await getTicketsFromJson()

    if (!ticketJson) {
        return {status: {code: 500, error: true}, body: "Internal Server Error: unable to access tickets json"}
    }

    const ticketExists = checkDuplicates(ticket, ticketJson)

    if (ticketExists) {
        return {status: {code: 400, error: true}, body: "Bad Request: ticket already exists"}
    }


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
            creationDate: Date.now(),
            ...(ticket.description && {
                description: ticket.description
            }),
            ...(ticket.file && {
                file: ticket.file
            })
        }

        ticketJson.push(newTicket)

        const writeJson = await writeTicketToJson(ticketJson)

        if (writeJson.error) { return {status: {code: 400, error: true}, body: writeJson.data} }

        return {status: {code: 200, error: false}, body: {ticket: newTicket}}
    } catch (e) {
        return {status: {code: 400, error: true}, body: e}
    }
}

export {createTicket}
