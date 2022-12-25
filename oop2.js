function TeamMember(salary) {
    this.salary = salary;
}

TeamMember.prototype.getSalary = function () {
    console.log(`Your salary: ${this.salary}`);
}

function Developer(code, salary) {
    TeamMember.call(this, salary);
    this.code = code;
}


Developer.prototype = Object.create(TeamMember.prototype);
Developer.prototype.coding = function () {
    console.log(this.code);
}

function FrontEndDev(name, lang, framework, level, code, salary) {
    Developer.call(this, salary, code);
    this.name = name;
    this.lang = lang;
    this.framework = framework;
    this._level = level;
}

FrontEndDev.prototype = Object.create(Developer.prototype);
FrontEndDev.prototype.intro = function () {
    console.log(`Hello! My name is ${this.name}. I'm ${this.occupation}.`);
}

FrontEndDev.prototype.sayLevel = function () {
    console.log(this.level);
}

function BackEndDev(name, lang, os, level, code, salary) {
    Developer.call(this, salary, code);
    this.name = name;
    this.lang = lang;
    this.os = os;
    this._level = level;
}

BackEndDev.prototype = Object.create(Developer.prototype);
BackEndDev.prototype.intro = function () {
    console.log(`Hello! My name is ${this.name}. I'm ${this.occupation}.`);
}

BackEndDev.prototype.sayLevel = function () {
    console.log(this.level);
}

function QA(name, level, isAutomation, salary) {
    TeamMember.call(this, salary);
    this.name = name;
    this._level = level;
    this.isAutomation = isAutomation;
}

QA.prototype = Object.create(TeamMember.prototype);
QA.prototype.testing = function () {
    console.log(`A new bug has been opened!`);
}

QA.prototype.intro = function () {
    console.log(`Hello! My name is ${this.name}. I'm ${this.occupation}.`);
}

function PM(name, level, isTechBackground, salary) {
    TeamMember.call(this, salary)
    this.name = name;
    this._level = level;
    this.occupation = 'Project manager';
    this.isTechBackground = isTechBackground;
}

PM.prototype = Object.create(TeamMember.prototype);
PM.prototype.asking = function () {
    console.log(`What are your statuses?`);
}

PM.prototype.intro = function () {
    console.log(`Hello! My name is ${this.name}. I'm ${this.occupation}.`);
}

PM.prototype.sayLevel = function () {
    console.log(this.level);
}

const feDev1 = new FrontEndDev('Mykola', 'Java Script', 'React', 'Middle', `<div class="greeting">Hello, world!</div>`, `4000$`);
const beDev1 = new BackEndDev('Petro', 'Ruby', 'Linux', 'Middle', `<<-SQL
INNER JOIN (#{transfer_receivers_uniq_query}) AS "trs_uniq" ON "trs_uniq"."utps_id" = "utps"."id"
SQL`, `4000$`);
const qa1 = new QA('Stepan', 'Junior', false, `2000$`)
const pm1 = new PM('Vasyl', 'Senior', true, `8000$`)

feDev1.coding();
beDev1.coding();

feDev1.getSalary();
qa1.getSalary();
pm1.getSalary();

console.log(feDev1.level);