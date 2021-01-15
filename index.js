#!/usr/bin/env node
const welcome = require('cli-welcome');
const chalk = require('chalk')
const sym = require('log-symbols')
const packageJson = require('./package.json')

const log = console.log;

const socials = [
  { name: 'LinkedIn', color: '#0077b5', link: 'https://www.linkedin.com/in/mikhaylovalexey/' },
  { name: 'Github', color: '#6e5494', link: 'https://github.com/plxel' },
  { name: 'Blog', color: '#fafafa', link: 'https://todo.dev' },
  { name: 'Telegram', color: '#0088cc', link: 'https://t.me/alexey_mikhaylov' },
]

const maxNameLength = Math.max(...socials.map(({ name }) => name.length))
const bgTitle = (color, title) => chalk.bgHex(color)(` ${title} `)

const makeSocialLine = ({ name, link, color }) => 
  `${bgTitle(color, name)}${name.padEnd(maxNameLength, ' ').replace(name, '')} ${chalk.dim(link)}`

welcome({
	title: packageJson.name,
	tagLine: `by Alexey Mikhaylov`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: packageJson.version,
});


log(`Hey, I’am software developer, love working remotely

Stack which I happy with:
${sym.success} ${chalk.hex('#00d8ff')('React')}
${sym.success} ${chalk.hex('#215732')('Node')}
${sym.success} ${chalk.hex('#e00097')('GraphQL')}
${sym.success} ${chalk.hex('#3178c6')('TypeScript')}*

${chalk.underline('_'.repeat(80))}

How to reach me:
${socials.map(makeSocialLine).join`\n`}
`)
