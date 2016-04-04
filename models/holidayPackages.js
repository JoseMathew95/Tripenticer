// Import mongoose and bcrypt
var mongoose = require('mongoose');

// need an alias for mongoose.Schema
var Schema = mongoose.Schema;

// Define our user Schema
var PackageSchema = new Schema({
	name: String,
	Destinations: String,
	Category: String,
	Duration: Number,
	Overview: String,
	inclusion: String,
	itinerary: String,
	created: Number
}, {
	collection: 'Packages'
});

module.exports = mongoose.model('Packages', PackageSchema);