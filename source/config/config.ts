import dotenv from 'dotenv';

dotenv.config();

const S_HOSTNAME = process.env.S_HOSTNAME || 'localhost';
const S_PORT = process.env.S_PORT || 3000;

const SERVER = {
    hostname: S_HOSTNAME,
    port: S_PORT
};

const config = {
    server: SERVER
};

export default config;