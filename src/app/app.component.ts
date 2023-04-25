import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
enableRipple(true);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public errorNum = '5';
  public warningNum = '0';
  public successNum = '0';
  public isChecked:boolean = false;
  public menuItems: MenuItemModel[] | undefined
  constructor() {
   
  }

  ngOnInit() {
   if(this.isChecked == true ) {
    this.menuItems = [
      {
        text: this.errorNum,
        iconCss: 'e-icons e-bullet-red',
      },
      {
        text: this.warningNum,
        iconCss: 'e-icons e-bullet-orange',
      },
      {
        text: this.successNum,
        iconCss: 'e-icons e-bullet-blue',
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

   else {
    this.menuItems = [
      {
        text: this.errorNum,
        iconCss: 'e-icons e-bullet-red',
      },
      {
        text: this.warningNum,
        iconCss: 'e-icons e-bullet-orange',
      },
      {
        text: this.successNum,
        iconCss: 'e-icons e-bullet-blue',
      },
  
      {
        iconCss:'e-icons e-remove',
      },
      {
        text: 'Language',
        items: [
          { text: 'English' },
          { text: 'Turkish' }
        ]
      },
      {
        text: 'MCS',
        iconCss: 'custom-icon logo'
  
      }
    ];
   }
  }


   
 
}
