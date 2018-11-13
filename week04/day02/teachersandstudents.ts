class Teacher {

  answer() { }

  teach(student: Student) {
    student.learn();
  }
}

class Student {

  learn() { }

  question(teacher: Teacher) {
    teacher.answer();
  }
}