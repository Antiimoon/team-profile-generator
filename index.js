const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const managers = [];
const engineers = [];
const interns = [];