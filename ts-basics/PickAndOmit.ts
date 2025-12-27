// Usage of Pick

interface User {
  id: string;
  name: string;
  address: string;
  age: number;
}

type userPreview = Pick<User, "name" | "address">;

function playBall(data: userPreview) {
  console.log(data.address, data.name);
}

type userPreview2 = Omit<User, "id">;

function playBall2(data: userPreview2) {
  console.log(data.address, data.name);
}

// TEST 1
playBall({ name: "Satadhi", address: "Baby Panda" });

// TEST 2
playBall2({ name: "momo-master", address: "Babay Shark", age: 33 });
