// script.js
document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const files = event.target.files;
    const imageLinksContainer = document.getElementById('imageLinks');

    imageLinksContainer.innerHTML = ''; // Clear previous links

    for (const file of files) {
        const imageUrl = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = file.name; // Add this to enable downloading
        link.textContent = `Download Image ${file.name}`;
        imageLinksContainer.appendChild(link);
    }
}
