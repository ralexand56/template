

export class user {
    users: Array<string> = ["Johnnie", "Tony", "Julie", "Lilli"];
    currentDate: Date = new Date();
    currentUser: string = "Paris Hilton";
    currentNumber:number = 1034200.01;

    constructor() {
        this.update();
        setInterval(() => this.update(), 1000);
    }

    update() {
        this.currentDate = new Date();
    }

}
