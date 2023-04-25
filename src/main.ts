import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


import { registerLicense } from '@syncfusion/ej2-base';




registerLicense('Mgo+DSMBaFt/QHRqVVhlWFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSn1SdkJiX35ccX1cQw==');


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
