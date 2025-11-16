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
