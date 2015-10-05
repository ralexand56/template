export class anim{
	plays:Array<string>=["Trips 1", "Cross Buck", "Shotgun"];
	
	constructor(){
		
	}
	
	 removeAnimator(p) {
		 console.log(p);
        var index = this.plays.indexOf(p);
        this.plays.splice(index, 1);
    }

}