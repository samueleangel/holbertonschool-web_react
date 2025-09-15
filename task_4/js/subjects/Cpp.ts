// Declaration merging: extend Teacher with C experience
export namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Cpp extends the base Subject
  export class Cpp extends Subject {
    // Return the specific requirements message
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    // Return available teacher if they have C experience
    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
