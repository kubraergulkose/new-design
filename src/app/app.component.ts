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
  constructor() {
   
  }

  public isChecked:boolean = true;
    // Menu items definition 
  public menuItems: MenuItemModel[] = [
    {
      text: 'File',
      iconCss: 'em-icons e-file',
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
