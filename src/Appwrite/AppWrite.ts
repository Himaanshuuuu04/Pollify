import { Client, Databases } from 'appwrite';

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject(import.meta.env.VITE_PROJECT_ID);

const databases: Databases = new Databases(client);

export { client, databases };
