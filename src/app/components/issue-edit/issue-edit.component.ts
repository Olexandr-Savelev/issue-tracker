import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Issue } from 'src/app/issue';
import { IssuesService } from 'src/app/issues.service';

interface editIssueForm {
  title: FormControl<string>;
  description: FormControl<string>;
  priority: FormControl<'low' | 'high'>;
}

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrl: './issue-edit.component.css',
})
export class IssueEditComponent implements OnInit {
  @Input() selectedIssue: Issue | null = null;
  @Output() formClose = new EventEmitter();

  editForm = new FormGroup<editIssueForm>({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    priority: new FormControl('high', { nonNullable: true }),
  });

  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.editForm.setValue({
      title: this.selectedIssue!.title,
      description: this.selectedIssue!.description,
      priority: this.selectedIssue!.priority,
    });
  }

  editIssue() {
    if (this.editForm && this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }
    const editedIssue: Issue = {
      ...this.selectedIssue!,
      ...this.editForm.getRawValue(),
    };
    this.issuesService.updateIssue(editedIssue);
    this.formClose.emit();
  }
}
