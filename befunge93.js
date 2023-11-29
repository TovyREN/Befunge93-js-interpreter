const Befunge = require('befunge93');
let befunge = new Befunge();

const fs = require('fs');

let input = process.stdin.fd;

befunge.onOutput = (output) => {
    process.stdout.write(output);
};

befunge.run(fs.readFileSync(input).toString());