const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  
  // Handle root route
  if (filePath === './') {
    filePath = './index.html';
  }
  
  // Handle blog routes - look for index.html in directories
  if (req.url.endsWith('/') && req.url !== '/') {
    filePath = '.' + req.url + 'index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == 'ENOENT') {
        // Try to find index.html in the directory if URL doesn't end with /
        if (!req.url.endsWith('/') && !path.extname(req.url)) {
          const indexPath = '.' + req.url + '/index.html';
          fs.readFile(indexPath, (indexError, indexContent) => {
            if (!indexError) {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end(indexContent, 'utf-8');
            } else {
              // Fallback to main index.html
              fs.readFile('./index.html', (fallbackError, fallbackContent) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(fallbackContent, 'utf-8');
              });
            }
          });
        } else {
          // Fallback to main index.html
          fs.readFile('./index.html', (fallbackError, fallbackContent) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fallbackContent, 'utf-8');
          });
        }
      } else {
        res.writeHead(500);
        res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`AI Tools Directory server running at http://localhost:${port}/`);
});