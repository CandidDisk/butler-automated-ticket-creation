interface Ticket {
    title: string,
    tel: number,
    creationDate?: number,
    description?: string,
    file?: File | string
}

export { Ticket }
