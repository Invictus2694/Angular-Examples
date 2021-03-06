import { Service3 } from './s3.service';
import { Service4 } from './s4.service';
import { Service2 } from './s2.service';
import { Component2 } from './c2.component';
import { Component1 } from './c1.component';
import { Service1 } from './s1.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,Component1,Component2],
    providers:[Service1,Service2,Service3,Service4],
    bootstrap: [AppComponent],
})
export class AppModule { }
