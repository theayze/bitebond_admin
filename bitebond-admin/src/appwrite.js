import { Client, Account, Avatars, Databases, Storage } from 'appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.fyp.bitebond',
    projectId: '666190b6000d516078cd',
    databaseId: '6661ba4c00026c31860a',
    userCollectionId: '6661baab00273144ede3',
    businessCollectionId: '6679433b00326211ed15',
    postsCollectionId: '6661bb8100382da78543',
    reviewsCollectionId: '667d4ed800166f4e9746',
    storageId: '6661e6b5000b4762ca16',
};

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    businessCollectionId,
    postsCollectionId,
    reviewsCollectionId,
    storageId,
} = config;

// Init your Appwrite SDK
const client = new Client();

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
    .setPlatform(platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, avatars, databases, storage, config, Query };
