


import { Client, Databases, ID } from "appwrite";

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('6713be070031395a4b05');

const databases = new Databases(client);
export { client, databases };
