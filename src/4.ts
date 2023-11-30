abstract class House {
   constructor(key: Key) {
  }
  protected doorIsOpened: boolean = false;
  protected key: Key;
  public abstract openDoor(key: Key): void;
  private tenants: Person[] = [];
  public comeIn(tenant: Person): void {
    if (this.doorIsOpened) {
      this.tenants.push(tenant);
    }
  }
};

class MyHouse extends House {
  constructor() {
    super(key)
  }
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.doorIsOpened = true;
    }
  }
};

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random() * 10;
  }

  public getSignature(): number {
    return this.signature;
  }
};

class Person {
  constructor(private key: Key) {}
  public getKey(): Key {
    return this.key;
  }
};

const key = new Key();
const house = new MyHouse();
const person = new Person(key);
house.openDoor(person.getKey());

house.comeIn(person);

export {};