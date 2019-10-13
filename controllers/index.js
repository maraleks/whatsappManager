var geoip = require('geoip-lite');
var managers = require('../models/managers');


exports.index = function(req, res, next) {
	
	var cookie = req.cookies.whatsappManager;
	

	if (cookie === undefined) {
		
		var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress; 
		//var ip = req.ipInfo;
		// Moscow 79.139.128.0
		// Saratov 5.167.144.80
		// St Petersburg 85.143.223.62
		var geo = geoip.lookup('79.139.128.0');

		if(geo) {
			var manager = managers.findByRegion(geo.city);
			if(manager) {
				res.cookie('whatsappManager', JSON.stringify({id:manager.id,phone:manager.phone}), { maxAge: 2 * 60 * 60 * 9000, httpOnly: true });
			}
		}
	

	} else {
		
		var whatsappManager = JSON.parse(cookie);
		var manager = managers.isActive(whatsappManager.id);

	}	

	
	
  	
  	res.render('index', { title: 'Ваш персональный менеджер', manager : manager});
}