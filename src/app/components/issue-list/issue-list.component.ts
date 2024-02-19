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
  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues(): void {
    this.issues = this.issuesService.getPendingIssues();
  }
}
