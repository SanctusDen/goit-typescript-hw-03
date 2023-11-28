abstract class House {
  protected doorIsOpened: boolean;
  protected key: string;
  public abstract openDoor(key: Key): void;
  public comeIn(tenant: Person): void {}
}
class MyHouse extends House {
  doorIsOpened = false;
  private tenants: Person[] = [];
  constructor(key: Key) {
    super();

  }
  openDoor(key: Key): void {
    if (key.getSignature() === key.getSignature()) {
      this.doorIsOpened = true;
    }
  }
  public comeIn(tenant: Person): void {
    if (this.doorIsOpened) {
      this.tenants.push(tenant);
    }
  }
}

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random() * 10;
  }

  public getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  public getKey(): Key {
    return this.key;
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());

house.comeIn(person);

export {};