const faker = require('faker');

const contacts = [];
for (let id = 1; id <= 100; id++) {
    contacts.push(Object.assign({ id }, faker.helpers.contextualCard()));
}

function getInitialData() {
    return {
        contacts,
    }
}

module.exports = getInitialData;