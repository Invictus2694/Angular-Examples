import { UsersModule } from './users/users.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { ProductsModule } from './products/products.module';


var routingRules=[
            {path:"home",component: HomeComponent},
            {path:"contact", component: ContactComponent},
            {path: "about", component: AboutComponent},
            {path: "", component: HomeComponent}


];

@NgModule({
    imports: [BrowserModule,UsersModule,ProductsModule,RouterModule.forRoot(routingRules),RouterModule],
    bootstrap:[AppComponent],
    exports: [],
    declarations: [AppComponent,ContactComponent,AboutComponent,HomeComponent],
    providers: [],
})
export class AppModule { }
