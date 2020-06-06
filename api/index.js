module.exports = (req, res) => {
	console.log(JSON.stringify(req));
	  const { name = 'World' } = req.query
	    res.send(`Hello ${name}!`)
}
