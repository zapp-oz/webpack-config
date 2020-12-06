import { template } from './app/utils/template';
import './main.scss';
import { Delivery } from './app/services/Delivery';

const car = {
  name: '911 turbo S',
  id: '23',
  owner: 'shresth dewan',
};
car.deliveryManagement = new Delivery(car.id, car.name, car.owner);

console.log(template(), 's');
console.log(car.deliveryManagement.getDelivery());
