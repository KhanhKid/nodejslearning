var express = require('express');

var handlebars = require('express3-handlebars')
 .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/header', function(req, res) {
	res.render('about', { fortune: fortune.getFortune() } );
});

