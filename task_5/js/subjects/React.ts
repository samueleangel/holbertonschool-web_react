// Declaration merging: extend Teacher with React experience
export namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // React subject class
  export class React extends Subject {
    // Return the specific requirements message
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    // Return available teacher if they have React experience
    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
