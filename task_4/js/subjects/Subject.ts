// Subject class lives in the same namespace
export namespace Subjects {
  export class Subject {
    // The assigned teacher must implement Subjects.Teacher
    protected teacher: Teacher | undefined;

    // Setter to assign the teacher to this subject
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
