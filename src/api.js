// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on
function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    try {
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(creds),
            headers: { "Content-Type": "application/json" }
        });

        // If the response is not OK, handle errors before parsing JSON
        if (!res.ok) {
            let errorMessage = "An unknown error occurred";
            
            // Attempt to extract error message from response body
            try {
                const errorData = await res.json();
                errorMessage = errorData.message || errorMessage;
            } catch (jsonError) {
                console.error("Error parsing error response:", jsonError);
            }

            throw new Error(`${res.status} - ${res.statusText}: ${errorMessage}`);
        }

        // Parse the response body
        const data = await res.json();
        return data;

    } catch (error) {
        console.error("Login failed:", error);
        throw new Error(error.message || "Something went wrong during login.");
    }
}
