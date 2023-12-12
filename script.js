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
        link.textContent = `View Image ${file.name}`;
        link.target = '_blank';
        imageLinksContainer.appendChild(link);
    }
}
