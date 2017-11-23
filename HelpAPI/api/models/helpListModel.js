var mongoose = require('mongoose')
var Schema = mongoose.Schema
require('mongoose-uuid2')(mongoose)

var HelpitemSchema = new Schema({
	app_id: Number,
	help_id: Number,
	locale_content: {
		en: {
			help_title: String,
			help_description: String,
			help_content: {
				text: String,
				image: String,
				video: String,
				link: String,
				svg: String,
				pdf: String,
				document: String
			}
		},
		da: {
			help_title: String,
			help_description: String,
			help_content: {
				text: String,
				image: String,
				video: String,
				link: String,
				svg: String,
				pdf: String,
				document: String
			}
		}
	}
})

HelpitemSchema.set('toObject', { getters: true })
HelpitemSchema.set('toJSON', { getters: true })

module.exports = mongoose.model('Helpitems', HelpitemSchema)