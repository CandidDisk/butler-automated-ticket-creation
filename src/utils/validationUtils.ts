import {Ticket} from "../models/TicketInterface";

const validateTicket = (ticket: Ticket) => {
    if (!ticket.title || !ticket.tel) { return {invalid: true, missingParam: true, invalidType: false}; }
    if (typeof ticket.title !== 'string' ||
        typeof ticket.tel !== 'number' ||
        (ticket.description && typeof ticket.description !== 'string') ||
        (ticket.file && typeof ticket.file !== 'object' && typeof ticket.file !== 'string')) { return {invalid: true, missingParam: false, invalidType: true}; }

    return {invalid: false, missingParam: false, invalidType: false};
};

export {validateTicket}
