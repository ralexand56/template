export class footballfield{
	players:Array<Player>=[];
	positions:Array<Position>=[
		{Name:"Center",Left:50,Top:80,IsSelected:false},
		{Name:"QB Standard",Left:50,Top:90,IsSelected:false},
		{Name:"QB Shotgun",Left:50,Top:110,IsSelected:false}
		];
	
	constructor(){
		
	}
	
	selectRoute(pos:Position){
		this.positions.forEach(p => {
			p.IsSelected = false;
		});
		
		pos.IsSelected=true;
	}
}

interface PlayerRoute{
	Name:string;
	Position:Position;
}

interface Player{
	Name:string;
	Photo:string;
}

interface Position{
	Name:string;
	Left:number;
	Top:number;
	IsSelected:boolean;
}