const dotenv = require("dotenv");

const staging = dotenv.config({ path: ".env.staging" }).parsed;
const production = dotenv.config({ path: ".env.production" }).parsed;

module.exports = {
    "pre-production": {
        ...production,
        HOST: "https://pre-production.example.com"
    },
    staging,
    production
};
