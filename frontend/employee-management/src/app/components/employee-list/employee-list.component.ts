import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, EmployeeFormComponent, MatDialogModule, DeleteDialogComponent, MatPaginatorModule, MatInputModule, MatSnackBarModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'position', 'department', 'salary', 'actions'];
  selectedEmployee: Employee | null = null;
  showForm = false;

  searchTerm: string = '';
  pagedEmployees: Employee[] = [];
  pageSize = 5;
  pageIndex = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private employeeService: EmployeeService, private dialog: MatDialog, private snackBar: MatSnackBar) {}


  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.applyFilterAndPaginate();
    });
  }

  applyFilterAndPaginate() {
    let filtered = this.employees;
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(e =>
        e.name.toLowerCase().includes(term) ||
        e.position.toLowerCase().includes(term) ||
        e.department.toLowerCase().includes(term)
      );
    }
    const start = this.pageIndex * this.pageSize;
    this.pagedEmployees = filtered.slice(start, start + this.pageSize);
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.applyFilterAndPaginate();
  }

  onSearchChange() {
    this.pageIndex = 0;
    this.applyFilterAndPaginate();
  }



  onDelete(employee: Employee) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { name: employee.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeService.deleteEmployee(employee.id).subscribe(() => {
          this.loadEmployees();
          this.snackBar.open('Employee deleted', 'Close', { duration: 2000 });
        });
      }
    });
  }

  onAdd() {
    this.selectedEmployee = null;
    this.showForm = true;
  }

  onEdit(employee: Employee) {
    this.selectedEmployee = { ...employee };
    this.showForm = true;
  }

  onFormSubmit(employee: Employee | Omit<Employee, 'id'>) {
    if ('id' in employee && employee.id) {
      this.employeeService.updateEmployee(employee.id, employee as Employee).subscribe(() => {
        this.loadEmployees();
        this.showForm = false;
        this.snackBar.open('Employee updated', 'Close', { duration: 2000 });
      });
    } else {
      this.employeeService.addEmployee(employee as Omit<Employee, 'id'>).subscribe(() => {
        this.loadEmployees();
        this.showForm = false;
        this.snackBar.open('Employee added', 'Close', { duration: 2000 });
      });
    }
  }
}

