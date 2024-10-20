import { Client, Databases, ID, Models } from "appwrite";

// Define an interface for your Poll type
interface Poll {
  $id: string; // Poll document ID
  question: string;
  options: string[];
  votes: number[]; // Votes array, one vote count per option
}

// Define an interface for your UserDetails type (if necessary)
interface UserDetails {
  $id: string; // User document ID
  name: string;
  email: string;
  // Add other fields as necessary
}

// Initialize the Appwrite client
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite API endpoint
  .setProject(import.meta.env.VITE_PROJECT_ID); // Use the environment variable

// Initialize the Databases service
const databases = new Databases(client);

// Export the client and databases for use in other modules
export { client, databases };

// Optionally export types for use in other parts of your application
export type { Poll, UserDetails };
