function Observer() {
  this.observers = [];
}

Observer.prototype.subscribe = function (observer) {
  this.observers.push(observer);
};

Observer.prototype.unsubscribe = function (observer) {
  this.observers = this.observers.filter(function (obs) {
    return obs !== observer;
  });
};

Observer.prototype.notify = function (data) {
  this.observers.forEach(function (observer) {
    observer(data);
  });
};

function GradeCalculator(questionCount) {
  this.questionCount = questionCount;
  this.correctCount = 0;
  this.observers = new Observer();
}

GradeCalculator.prototype.answer = function (correctCount) {
  this.correctCount = correctCount;
  this.calculate();
};

GradeCalculator.prototype.calculate = function () {
  var grade = (this.correctCount / this.questionCount) * 100;
  this.observers.notify(grade);
};

function Teacher() {
  this.grades = [];
}

Teacher.prototype.saveGrade = function (grade) {
  this.grades.push(grade);
  console.log("Teacher: New grade added: " + grade + "%");
};

function Student(gradeCalculator) {
  this.gradeCalculator = gradeCalculator;
  this.gradeCalculator.observers.subscribe(this.gradeChanged.bind(this));
}

Student.prototype.gradeChanged = function (grade) {
  console.log("Student: Your new grade is " + grade + "%");
};

function Parent(gradeCalculator) {
  this.gradeCalculator = gradeCalculator;
  this.gradeCalculator.observers.subscribe(this.gradeChanged.bind(this));
}

Parent.prototype.gradeChanged = function (grade) {
  console.log("Parent: Your student's new grade is " + grade + "%");
};

var gradeCalculator = new GradeCalculator(20);
var teacher = new Teacher();
var student = new Student(gradeCalculator);
var parent = new Parent(gradeCalculator);

gradeCalculator.answer(15);

teacher.saveGrade(student.gradeCalculator.grades[0]);
