// app/actions.js

'use server'; // <-- This directive makes the function run exclusively on the server (VPS1)

// --- Configuration ---
// The URL of the File Listing API running on VPS2
const FILE_LIST_API_URL = 'http://158.174.210.72:3001';

/**
 * Fetches the dynamic list of evidence files from the File Server API (VPS2).
 * This function runs only on the Next.js server (VPS1).
 */
export async function fetchEvidenceList() {
    console.log(`[Server Action] Calling API at: ${FILE_LIST_API_URL}`);
    
    try {
        // VPS1 calls VPS2's API on port 3001 (which is allowed by the firewall)
        const response = await fetch(FILE_LIST_API_URL, {
            // No cache is critical to ensure we always get the LATEST file list
            cache: 'no-store', 
        });

        if (!response.ok) {
            // Handle HTTP errors (e.g., 404, 500)
            const errorText = await response.text();
            console.error(`API Fetch failed with status ${response.status}: ${errorText}`);
            return { error: `Server status ${response.status}. Firewall check needed.` };
        }

        const data = await response.json();
        
        // Check for internal API errors (like fs permissions on VPS2)
        if (data.error) {
            console.error(`API reported internal error: ${data.error}`);
            return { error: data.error };
        }
        
        console.log(`[Server Action] Successfully retrieved ${data.length} files.`);
        return data;

    } catch (error) {
        console.error("Network or DNS error during API call:", error.message);
        // This is the most likely error if the firewall or service on VPS2 is down
        return { error: `Network connection failed: ${error.message}. Is VPS2 API running?` };
    }
}