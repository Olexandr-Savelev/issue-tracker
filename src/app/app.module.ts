import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueReportComponent } from './components/issue-report/issue-report.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { IssueEditComponent } from './components/issue-edit/issue-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReportComponent,
    IssueEditComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
