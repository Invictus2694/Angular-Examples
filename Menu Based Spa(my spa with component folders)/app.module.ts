import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

var routingRules =[

    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
]

@NgModule({
    imports: [BrowserModule,RouterModule,RouterModule.forRoot(routingRules)],
    exports: [],
    declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent],
    bootstrap:[AppComponent],
    providers: [],
})
export class AppModule { }
