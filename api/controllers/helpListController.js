var mongoose = require('mongoose'),
	Helpitem = mongoose.model('Helpitems')

exports.list_all_helpitems = function(req, res) {
	Helpitem.find({}, function(err, helpitem) {
		if (err)
			res.send(err)
		res.json(helpitem)
		console.log(helpitem[1].locale_content) // Leo you really love walking blind
	})
}

exports.list_helpitem = function(req, res) {
	Helpitem.find({}, function(err, helpitem) {
		if (err)
			res.send(err)
		res.json(helpitem)
		//console.log(helpitem) // Leo you really love walking blind
	})
}

exports.create_a_helpitem = function(req, res) {
	var new_helpitem = new Helpitem(req.body)
	console.log(new_helpitem) // Leo you really love walking blind
	new_helpitem.save(function(err, helpitem) {
		if (err)
			res.send(err)
		res.json(helpitem)
	})
}

exports.read_a_helpitem = function(req, res) {
	Helpitem.findById(req.params.helpitemId, function(err, helpitem) {
		if (err)
			res.send(err)
		res.json(helpitem)
	})
}

exports.update_a_helpitem = function(req, res) {
	Helpitem.findOneAndUpdate({ _id: req.params.helpitemId }, req.body, { new: true }, function(err, helpitem) {
		if (err)
			res.send(err)
		res.json(helpitem)
	})
}

exports.delete_a_helpitem = function(req, res) {

	Helpitem.remove({
		_id: req.params.helpitemId
	}, function(err, helpitem) {
		if (err)
			res.send(err)
		res.json({ message: 'Helpitem successfully deleted' })
	})
}