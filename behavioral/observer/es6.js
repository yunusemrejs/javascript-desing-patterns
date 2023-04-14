class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

class GradeCalculator {
  constructor(questionCount) {
    this.questionCount = questionCount;
    this.correctCount = 0;
    this.observers = new Observer();
  }

  answer(correctCount) {
    this.correctCount = correctCount;
    this.calculate();
  }

  calculate() {
    const grade = (this.correctCount / this.questionCount) * 100;
    this.observers.notify(grade);
  }
}

class Teacher {
  constructor() {
    this.grades = [];
  }

  saveGrade(grade) {
    this.grades.push(grade);
    console.log(`Teacher: New grade added: ${grade}%`);
  }
}

class Student {
  constructor(gradeCalculator) {
    this.gradeCalculator = gradeCalculator;
    this.gradeCalculator.observers.subscribe(this.gradeChanged.bind(this));
  }

  gradeChanged(grade) {
    console.log(`Student: Your new grade is ${grade}%`);
  }
}

class Parent {
  constructor(gradeCalculator) {
    this.gradeCalculator = gradeCalculator;
    this.gradeCalculator.observers.subscribe(this.gradeChanged.bind(this));
  }

  gradeChanged(grade) {
    console.log(`Parent: Your student's new grade is ${grade}%`);
  }
}

const gradeCalculator = new GradeCalculator(20);
const teacher = new Teacher();
const student = new Student(gradeCalculator);
const parent = new Parent(gradeCalculator);

gradeCalculator.answer(15);

teacher.saveGrade(student.gradeCalculator.grades[0]);
