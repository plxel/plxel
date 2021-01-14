#!/usr/bin/env node
const welcome = require('cli-welcome');
const packageJson = require('./package.json')

welcome({
	title: packageJson.name,
	tagLine: `by Alexey Mikhaylov`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: packageJson.version,
});