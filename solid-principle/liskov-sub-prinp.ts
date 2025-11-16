// if S is a subtype of T, then object of type T can be always be replaceable by object of Type S


abstract class Bird {
      abstract eat(): void;
}

class FlyingBird extends Bird {
    eat(): void {
        console.log("Flying birds can eats lots of stuff");
    }

    fly(): void {
        console.log("Flying birds can also fly a lot");
    }
}

class Penguin extends Bird {
    eat(): void {
        console.log("Penguin can also eat stuff");
    }
    swim(): void {
        console.log("these penguins can also swim very good");
    }
}

function makeBirdEat(bird: Bird) {
  bird.eat(); // works for any Bird
}

makeBirdEat(new FlyingBird());
makeBirdEat(new Penguin());
