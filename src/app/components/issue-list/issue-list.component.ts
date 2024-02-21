import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/issue';
import { IssuesService } from 'src/app/issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css',
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue = false;
  showEditIssue = false;
  showConfirmDialog = false;
  selectedIssue: Issue | null = null;

  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues(): void {
    this.issues = this.issuesService.getPendingIssues();
  }

  onCloseForm() {
    if (this.showReportIssue) {
      this.showReportIssue = false;
    }
    if (this.showEditIssue) {
      this.showEditIssue = false;
      this.selectedIssue = null;
    }
    this.getIssues();
  }

  onConfirm(confirm: boolean) {
    if (confirm && this.selectedIssue) {
      this.issuesService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
    this.showConfirmDialog = false;
  }

  onResolve(issue: Issue) {
    (this.selectedIssue = issue), (this.showConfirmDialog = true);
  }

  onEdit(issue: Issue) {
    (this.selectedIssue = issue), (this.showEditIssue = true);
  }
}
