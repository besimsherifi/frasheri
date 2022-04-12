import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frasheri';
  selectedLanguage: any = localStorage.getItem('lang');

  constructor(private translate: TranslateService) {
    if (this.selectedLanguage) {
      this.translate.setDefaultLang('al');
      this.translate.use(this.selectedLanguage);
    }
  }
}
