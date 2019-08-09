import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	
	selector:'app-test',
	templateUrl:'test.component.html'
})

export class TestComponent {
	
	@Input('parentData') public name;
	@Output() public childEvent = new EventEmitter();

	fireEvent(){
				this.childEvent.emit('Sumit');
	}

}