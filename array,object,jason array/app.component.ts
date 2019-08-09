import { Component } from "@angular/core";

@Component({
	
	selector:"app-root",
	templateUrl:"app.component.html"

})

export class AppComponent{
	
	Student={

	name:"Sumit",
	address:"Lucknow"
	}

	Course=[ "Angular","Java","C"];

	List: any[]=[

			{name:"Sumit",rollno:2},
			{name:"Ashish",rollno:3}


	];


	
}