// script.js
document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const files = event.target.files;
    const imageLinksContainer = document.getElementById('imageLinks');

    imageLinksContainer.innerHTML = ''; // Clear previous links

    for (const file of files) {
        const imageUrl = URL.createObjectURL(file);

        // Create a link
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = file.name; // Add this to enable downloading
        link.textContent = `Download Image ${file.name}`;
        imageLinksContainer.appendChild(link);

        // Create an image element
        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = file.name;
        image.style.maxWidth = '100%'; // Set the maximum width to maintain responsiveness
        imageLinksContainer.appendChild(image);
    }
}
