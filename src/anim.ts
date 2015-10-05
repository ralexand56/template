import {autoinject} from 'aurelia-framework';
import {CssAnimator} from 'aurelia-animator-css';

@autoinject
export class anim{
	plays:Array<string>=["Trips 1", "Cross Buck", "Shotgun"];
	
	constructor(public animator:CssAnimator){
		//console.log(this.animator);
	}
	
	removeAnimator(p) {
		console.log(p);
        var index = this.plays.indexOf(p);
        this.plays.splice(index, 1);
    }
	
	 addAnimator() {
		 this.plays.push("Option 1");
	 }

}