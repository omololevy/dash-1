import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from "rxjs";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';

import { AppInboxService } from './app-inbox.service';
import { MailComposeComponent } from './mail-compose.component';

@Component({
  selector: 'app-inbox',
  templateUrl: './app-inbox.component.html',
  styleUrls: ['./app-inbox.component.css'],
  providers: [AppInboxService]
})
export class AppInboxComponent implements OnInit {
  isMobile:any;
  screenSizeWatcher: Subscription;
  isSidenavOpen: Boolean = true;
  selectToggleFlag = false;
  @ViewChild(MatSidenav) private sideNave: MatSidenav;
  messages:any;


  constructor(private router: Router,
    private media: MediaObserver,
    public composeDialog: MatDialog,
    private inboxService: AppInboxService) { }

  ngOnInit() {
    this.inboxSideNavInit();
    this.messages = this.inboxService.messages;
  }
  openComposeDialog() {
    let dialogRef = this.composeDialog.open(MailComposeComponent);
    dialogRef.afterClosed().subscribe(result => { });
  }
  selectToggleAll() {
    this.selectToggleFlag = !this.selectToggleFlag;
    this.messages.forEach((msg) => { msg.selected = this.selectToggleFlag });
  }


  updateSidenav() {
    var self = this;
    setTimeout(() => {
      self.isSidenavOpen = !self.isMobile;
      self.sideNave.mode = self.isMobile ? 'over' : 'side';
    })
  }
  inboxSideNavInit() {
    this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
    this.updateSidenav();
    this.screenSizeWatcher = this.media.subscribe((change: MediaChange) => {
      this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
      this.updateSidenav();
    });
  }
}
