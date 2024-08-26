import { createServer } from 'http';
import { writeFile } from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5500;

const server = createServer((req, res) => {
  console.log(`${req.method} request for ${req.url}`);

  // Route handling
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the Home Page');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the About Page');
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the Contact Page');
  } else if (req.url === '/file-write') {
    writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('File write failed');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File written successfully');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port: http://localhost:${PORT}`);
});
