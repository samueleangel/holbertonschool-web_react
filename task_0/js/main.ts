// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Sample data
const student1: Student = {
  firstName: 'Alma',
  lastName: 'Garcia',
  age: 23,
  location: 'Madrid',
};

const student2: Student = {
  firstName: 'Luis',
  lastName: 'May',
  age: 28,
  location: 'CDMX',
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Render a basic table with first name and location
function renderStudentsTable(students: Student[]): void {
  // Create base elements
  const table: HTMLTableElement = document.createElement('table');
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const headerRow: HTMLTableRowElement = document.createElement('tr');

  // Header cells
  const thName: HTMLTableCellElement = document.createElement('th');
  thName.textContent = 'First name';
  const thLoc: HTMLTableCellElement = document.createElement('th');
  thLoc.textContent = 'Location';

  headerRow.appendChild(thName);
  headerRow.appendChild(thLoc);
  thead.appendChild(headerRow);

  // Body rows
  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  students.forEach((s: Student) => {
    const row: HTMLTableRowElement = document.createElement('tr');

    const nameCell: HTMLTableCellElement = document.createElement('td');
    nameCell.textContent = s.firstName;

    const locCell: HTMLTableCellElement = document.createElement('td');
    locCell.textContent = s.location;

    row.appendChild(nameCell);
    row.appendChild(locCell);
    tbody.appendChild(row);
  });

  // Attach to DOM
  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Run
renderStudentsTable(studentsList);
