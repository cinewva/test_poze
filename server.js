// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Setarea multer pentru încărcarea imaginilor
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Rute
app.use(express.static('public'));

app.post('/upload', upload.array('images'), (req, res) => {
  const imageLinks = [];

  req.files.forEach((file, index) => {
    const imageName = `image-${index + 1}${path.extname(file.originalname)}`;
    const imageUrl = `/${imageName}`;
    imageLinks.push({ name: imageName, url: imageUrl });

    // Salvează imaginea în folderul "public"
    const filePath = path.join(__dirname, 'public', imageName);
    require('fs').writeFileSync(filePath, file.buffer);
  });

  res.json({ success: true, images: imageLinks });
});

app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});
