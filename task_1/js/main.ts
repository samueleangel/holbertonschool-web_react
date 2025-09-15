// Base Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  [key: string]: any;
}

// Extended Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Function interface for printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Teacher example
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Director example
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Print teacher name
console.log(printTeacher('John', 'Doe')); // J. Doe

// -------- Task 4: Writing a class --------

// Interface for class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface for constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Implement the class
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test instance
const student: StudentClassInterface = new StudentClass('Alma', 'Lopez');
console.log(student.displayName()); // Alma
console.log(student.workOnHomework()); // Currently working
