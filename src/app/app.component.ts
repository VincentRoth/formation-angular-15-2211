import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'veterinarian2211bis';

  constructor(private translateService: TranslateService) {}

  getEnv(): string {
    return environment.production ? 'PROD' : 'DEV';
  }

  changeLang(lang: string): void {
    this.translateService.use(lang);
  }
}
