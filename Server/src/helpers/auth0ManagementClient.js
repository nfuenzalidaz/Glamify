const { ManagementClient } = require('auth0');
require('dotenv').config();

const { AUTH0_URL, AUTH0_CLIENTID, AUTH0_SECRET } = process.env;

const auth0ManagementClient = new ManagementClient({
  domain: AUTH0_URL,
  clientId: AUTH0_CLIENTID,
  clientSecret: AUTH0_SECRET,
});

module.exports = auth0ManagementClient;
