import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
enableRipple(true);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public errorNum = '5';
  public warningNum = '0';
  public successNum = '0';
  constructor() {
   
  }

  public isChecked:boolean = true;
    // Menu items definition 
  public menuItems: MenuItemModel[] = [
    {
      text: this.successNum,
      iconCss: 'e-icons e-bullet-green',
    },
    {
      text: this.warningNum,
      iconCss: 'e-icons e-bullet-yellow',
    },
    {
      text: this.errorNum,
      iconCss: 'e-icons e-bullet-red',
    },
    {
      iconCss:'e-icons e-checked',
    },
    {
      text: 'Language',
      items: [
        { text: 'English' },
        { text: 'Turkish' }
      ]
    },
    {
      iconCss: 'custom-icon logo'

    }
  ];
}
