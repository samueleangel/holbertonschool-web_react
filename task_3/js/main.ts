/// <reference path="./crud.d.ts" />

// Import shared types
import type { RowID, RowElement } from './interface';

// Import all JS CRUD functions with types from crud.d.ts
import * as CRUD from './crud.js';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert row and capture its new id
const newRowID: RowID = CRUD.insertRow(row);

// Build an updated version with an age
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
