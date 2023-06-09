# Butler-automated-ticket-creation technical test


## Prerequisites

#### Npm v8.19.2 or compatible or compatible

Refer to https://www.npmjs.com/get-npm

## Installation

``` bash
# Clone the repo w/ 
$ git clone https://github.com/CandidDisk/butler-automated-ticket-creation.git butler-automated-ticket-creation

# Navigate to the generated directory & install dependencies w/
$ npm install

# Start the app w/
$ npm run start
```
API will be ready at [http://localhost:3001](http://localhost:3001)

To create a new ticket


``` bash
Post a ticket to [http://localhost:3001/tickets/post-ticket](http://localhost:3001/tickets/post-ticket)

# Ticket body follows Ticket model
{
  "title": string,
  "tel": number,
  "description": string, # optional
  "file": string, # optional
}

# Example post request body
{
  "title": "My neighbour is loud",
  "tel": 12344567
}
```


