import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isSelectVisible: boolean = true;

  public observable = of([{ value: 'test' }]);

  public selectedValue: any;

  public toggle() {
    this.isSelectVisible = !this.isSelectVisible;
  }
}
