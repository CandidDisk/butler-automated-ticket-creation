import {Ticket} from "../models/TicketInterface";

const fs = require('fs');

const filePath = 'tickets.json';


const readFile = (): Promise<{ error: boolean, data: any }> => {


    return new Promise((resolve, reject) => {
        fs.access(filePath, fs.constants.F_OK, (e: any) => {
            if (e) {
                fs.writeFile(filePath, '[]', (e: any) => {
                    if (e) { reject({ error: true, data: e }); }
                    resolve({ error: false, data: [] });
                });
            }
            fs.readFile(filePath, 'utf8', (e: any, data: string) => {
                if (e) { reject({ error: true, data: e }); }

                try {
                    const ticketJson: Ticket[] = JSON.parse(data);
                    resolve({ error: false, data: ticketJson });
                } catch (e) {
                    reject({ error: true, data: e });
                }
            });
        });
    });
};

const getTicketsFromJson = async (): Promise<any> => {
    const ticketJson: { error: boolean, data: any } = await readFile();

    if (ticketJson.error) {
        return false;
    }

    console.log(ticketJson);

    return ticketJson.data;
};

const writeTicketToJson = async (tickets: Ticket[]): Promise<{ error: boolean, data: any }> => {
    const ticketsJson = JSON.stringify(tickets)

    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, ticketsJson, (e: any) => {
            if (e) { reject({ error: true, data: "Error writing to file" }); }
            resolve({ error: false, data: "Write successful" });
        });
    });
}

export { getTicketsFromJson, writeTicketToJson }
