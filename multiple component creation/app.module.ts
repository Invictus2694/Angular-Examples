import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/Forms";
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	
	imports:[BrowserModule,FormsModule],
	declarations:[AppComponent, HeaderComponent, MenuComponent, HomeComponent],
	bootstrap:[AppComponent]

})

export class AppModule{
	
	
}