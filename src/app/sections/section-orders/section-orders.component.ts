import { Component, OnInit } from '@angular/core';
import { Order} from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [{id: 1, customer: {id: 1, name: 'Main St Bakery', state: 'CO', email: 'bakery@gmail.com'}, total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 2), status: 'Completed' }] 

  ngOnInit() {
  }

}
