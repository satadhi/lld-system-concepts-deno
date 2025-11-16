// basically dont make other classes implement methods which is not really needed
// for example robot does not need eating method or functionality so no need to have 
// eating and it saying i dont eat. Just dont have that method itself only
interface Iworkable {
    work():void;
}

interface Ieatable {
    eat():void
}

class Human implements Iworkable, Ieatable {
    work(): void {
        console.log("human can work 8 hours a day")
    }
    eat(): void {
        console.log("Human eat a lot of stuff")
    }
}

class Robot implements Iworkable {
    work(): void {
        console.log("Robot can work through out the day");
    }
}


// usage

const bob  = new Human();
const robo = new Robot();

bob.eat();
bob.work();
robo.work();
