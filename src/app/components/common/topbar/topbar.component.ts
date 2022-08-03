import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as domHelper from '../../../helpers/dom.helper';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit {
  @Input() sidenav:any;
  @Input() notificPanel:any;
  @Output() onLangChange = new EventEmitter<any>();
  currentLang = 'en';
  availableLangs = [{
    name: 'English',
    code: 'en',
  }, {
    name: 'Spanish',
    code: 'es',
  }]
  egretThemes:any;
  
  constructor(private themeService: ThemeService) {}
  ngOnInit() {
    this.egretThemes = this.themeService.egretThemes;
  }
  setLang() {
    this.onLangChange.emit(this.currentLang);
  }
  changeTheme(theme:any) {
    this.themeService.changeTheme(theme);
  }
  toggleNotific() {
    this.notificPanel.toggle();
  }
  toggleSidenav() {
    this.sidenav.toggle();
  }
  toggleCollapse() {
        let appBody = document.body;
        domHelper.toggleClass(appBody, 'collapsed-menu');
        domHelper.removeClass(document.getElementsByClassName('has-submenu'), 'open');
    }
}