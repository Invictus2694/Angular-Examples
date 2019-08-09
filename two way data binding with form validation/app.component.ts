import { Component, OnInit } from "@angular/core";
import { Student } from "./student";

@Component({
	
	selector: "app-root",
	templateUrl: "app.component.html"
})

export class AppComponent{
	
	s:Student = new Student();

}