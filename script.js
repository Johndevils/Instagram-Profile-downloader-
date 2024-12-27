// Function to fetch and download profile picture
async function fetchProfilePicture() {
    const username = document.getElementById("username").value.trim();
    const messageElement = document.getElementById("message");

    // Input validation
    if (!username) {
        messageElement.textContent = "Please enter a username.";
        return;
    }

    // Notify user
    messageElement.textContent = "Fetching profile picture...";

    try {
        // Fetch Instagram profile data
        const response = await fetch(`https://www.instagram.com/${username}/?__a=1&__d=dis`);
        if (!response.ok) {
            throw new Error("Unable to fetch profile data. Check the username.");
        }

        const data = await response.json();
        const profilePicUrl = data.graphql.user.profile_pic_url_hd;

        // Create temporary download link
        const link = document.createElement("a");
        link.href = profilePicUrl;
        link.download = `${username}_profile_pic.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        messageElement.textContent = "Profile picture downloaded successfully.";
    } catch (error) {
        console.error("Error:", error);
        messageElement.textContent = "Failed to fetch profile picture. Try again.";
    }
}
