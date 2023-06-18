# Closer Take Home Assignment


## Prerequisites

#### Npm v8.19.2 or compatible or compatible

Refer to https://www.npmjs.com/get-npm

## Instructions

``` bash
# Clone the repo w/ 
$ git clone https://github.com/CandidDisk/closer-test.git closer-test

# Navigate to the generated directory & install dependencies w/
$ npm install

# Start the app w/
$ npm run start

# Run jest unit tests w/
$ npm test 
or
$ npm run test
```
Assignment will be ready at [http://localhost:3001](http://localhost:3001)

Data documentation

``` bash
# Todo model
{ 
  "isComplete": boolean,
  "description": string,
  "requiredHours": number,
  "id": string # optional
}

# Example todo object
{ 
  "isComplete": false,
  "description": "Remind me to call John today ☎️",
  "requiredHours": 2,
  "id": "d2c1010d-b423-4166-acaf-ca3927425710"
}
```



