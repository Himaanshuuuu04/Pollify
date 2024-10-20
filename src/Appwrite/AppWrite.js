
import { Client, Databases, ID } from "appwrite";


const client = new Client();


client
  .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite API endpoint
  .setProject(import.meta.env.VITE_PROJECT_ID); // Use the environment variable

// Initialize the Databases service
const databases = new Databases(client);

// Export the client and databases for use in other modules
export { client, databases };
