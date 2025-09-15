// Declaration merging: extend Teacher with Java experience
export namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Java subject class
  export class Java extends Subject {
    // Return the specific requirements message
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    // Return available teacher if they have Java experience
    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingJava) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
