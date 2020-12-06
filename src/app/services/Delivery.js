export class Delivery {
  constructor(id, name, owner) {
    this.id = id;
    this.name = name;
    this.owner = owner;
    this.deliveryDate = new Date().getDate() + 2;
  }

  getDelivery() {
    return `Your vehicle will be delivered by ` + String(this.deliveryDate);
  }
}
