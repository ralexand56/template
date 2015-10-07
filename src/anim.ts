// import {autoinject} from 'aurelia-framework';
// import {CssAnimator} from 'aurelia-animator-css';

//@autoinject
export class anim{
	plays:Array<string>=["Trips 1", "Cross Buck", "Shotgun"];
	duration:int32 = 1;
	speeds:Array<string> = ["fast","slow","medium"];
	
	removeAnimator(p) {
        var index = this.plays.indexOf(p);
        this.plays.splice(index, 1);
    }
	
	 addAnimator() {
		 this.plays.push("Option 1");
	 }

}