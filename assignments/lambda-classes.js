// CODE here for your Lambda Classes
class Person {
    constructor(PersonAttributes) {
        this.name = PersonAttributes.name;
        this.age = PersonAttributes.age;
        this.location = PersonAttributes.location;

    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(InstructAttr) {
        super(InstructAttr);
        this.specialty = InstructAttr.specialty;
        this.favLanguage = InstructAttr.favLanguage;
        this.catchPhrase = InstructAttr.catchPhrase;

    }

    //methods

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}


class Student extends Person {
  constructor(StudentAttr) {
      super(StudentAttr);
      this.previousBackground = StudentAttr.previousBackground;
      this.className = StudentAttr.className;
      this.favSubjects = StudentAttr.favSubjects;
  }    

  listsSubjects() {
      console.log("placeholder");
  }

  PRAssignment(subject) {
      return `${student.name} has a PR for ${subject}`
  }

  sprintChallenge() {
      return `${this.name} has begun sprint challenge on ${subject}`
  }
}


class ProjectManager extends Instructor {
    constructor(PMAttribute) {
        super(PMAttribute);
        this.gradClassName = PMAttribute.gradClassName;
        this.favInstructor = PMAttribute.favInstructor;
    }

    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    } 


}