module.exports = function(app) {
	var helpList = require('../controllers/helpListController')

	// Routes
	app.route('/helpitems')
		.get(helpList.list_all_helpitems)
		.post(helpList.create_a_helpitem)

	app.route('/helpitems/:helpitemId')
		.get(helpList.read_a_helpitem)
		.put(helpList.update_a_helpitem)
		.delete(helpList.delete_a_helpitem)
}