const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

	if (req.url === '/'){
		fs.readFile(
			path.join(__dirname, 'public', 'index.html'),
			(err, content) => {
				if(err) throw err

				res.end(content)
			}
		)
	}
	if (req.url === '/contato')
		res.end('<h1>Contato</h1>')
	


}).listen(5000, () => console.log('server is running'))
