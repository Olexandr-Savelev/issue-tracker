import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Issue } from 'src/app/issue';
import { IssuesService } from 'src/app/issues.service';

interface IssueForm {
  title: FormControl<string>;
  description: FormControl<string>;
  priority: FormControl<string>;
  type: FormControl<string>;
}

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrl: './issue-report.component.css',
})
export class IssueReportComponent {
  @Output() formClose = new EventEmitter();

  issueForm = new FormGroup<IssueForm>({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    description: new FormControl('', { nonNullable: true }),
    priority: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    type: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });
  constructor(private issuesService: IssuesService) {}

  addIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }

    this.issuesService.createIssue(this.issueForm.getRawValue() as Issue);
    this.formClose.emit();
  }
}
