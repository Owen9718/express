const express = require('express');

const app = express();

const ExpressError = require('./errors');

const { convertAndValidateNumsArray, findMean, findMode, findMedian } = require('./helpers');

app.get('/mean', (req, res) => {
	if (!req.query.nums) {
		throw new ExpressError('You must query a comma-seprated list of numbers', 400);
	}
	let nums = convertAndValidateNumsArray(req.query.nums.split(','));
	let results = {
		operation: 'mean',
		value: findMean(nums)
	};
	return res.send(results);
});

app.get('/mode', (req, res) => {
	if (!req.query.nums) {
		throw new ExpressError('You must query a comma-seprated list of numbers', 400);
	}
	let nums = convertAndValidateNumsArray(req.query.nums.split(','));
	let results = {
		operation: 'mode',
		value: findMode(nums)
	};
	return res.send(results);
});

app.get('/median', (req, res) => {
	if (!req.query.nums) {
		throw new ExpressError('You must query a comma-seprated list of numbers', 400);
	}
	let nums = convertAndValidateNumsArray(req.query.nums.split(','));
	let results = {
		operation: 'median',
		value: findMedian(nums)
	};
	return res.send(results);
});

app.listen(3000, function() {
	console.log('App on port 3000');
});
