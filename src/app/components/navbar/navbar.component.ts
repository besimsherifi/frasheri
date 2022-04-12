import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(['al', 'mk','en']);
  }

  isCollapsed: boolean = true;
  selectedLanguage: any = '';

  ngOnInit(): void {
    console.log(this.selectedLanguage);
    
      this.selectedLanguage = localStorage.getItem('lang') || 'al'
  }

  changeLanguage(language: any) {
    localStorage.setItem('lang', language);
    this.translate.use(language);
    this.selectedLanguage = language;
  }
}
