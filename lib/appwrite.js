import { Client, Account, ID, Avatars, Databases, Query, Storage } from 'react-native-appwrite';


export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: 'com.americans.kyc',
    projectId: "6672b5b600029fd9c7bd",
    databaseID: "6672b5e700259bc5706d",
    userCollectionId: "6672b5f7002b0e0d6a56",
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const databases = new Databases(client)

export default client; // Export client for other usages

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username)
        if (!newAccount) throw new Error("Account Creation Failed")
        await signIn(email, password)

        // Create new User in Database after sign in
        const newUser = await databases.createDocument(appwriteConfig.databaseID, appwriteConfig.userCollectionId, ID.unique(), {
            accountId: newAccount.$id,
            email,
            username,
        })

        return newUser

    } catch (error) {
        console.log("Create User Error", error)
        throw new Error(error)
    }
}

export const signIn = async (email, password) => {
    try {
        let session;
        try {
            // Check if a session already exists
            session = await account.getSession('current');

            if (session) {
                // If a session exists, you may either return the existing session
                return session;
            }
        } catch (error) {
            // If there is no current session, an error will be thrown, and you can proceed to create a new session
            session = await account.createEmailPasswordSession(email, password)
        }
        return session
    }
    catch (error) {
        console.error('Sign In Error:', error);
        throw error;
    }
}

export const getCurrentUser = async () => {
    try {
        // Check if a session already exists
        const currentAccount = await account.get();

        if (!currentAccount) throw new Error('No current account found');

        const currentUser = await databases.listDocuments(appwriteConfig.databaseID, appwriteConfig.userCollectionId, [Query.equal('accountId', currentAccount.$id)])

        if (!currentUser) throw new Error('User not found in database');
        return currentUser.documents[0]

    } catch (error) {
        // If there is no current session, an error will be thrown, and you can proceed to create a new session
        // Handle session not found error by prompting for sign-in
        if (error.message.includes('missing scope (account)')) {
            console.error('User is not authenticated. Please sign in.');
        }
        console.error('Get Current User Error:', error);
        throw error;
    }
}


export const signOut = async () => {
    try {
        const session = await account.deleteSession('current')
        return session
    } catch (error) {
        throw new Error(error)
    }
}

