import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent{

  // @Input(), @Output(), and EventEmitter facilitate communication between your two components. 
  // An @Input() serves as a doorway for data to come into the component, and an 
  // @Output() acts as a doorway for data to go out of the component. 
  // An @Output() has to be of type EventEmitter, so that a component can raise an event when there's data ready to share with another component.
  // Use @Input() to specify that the value of a property can come from outside of the component. 
  //Use @Output() in conjunction with EventEmitter to specify that the value of a property can leave the component so that another component can receive that data.

  editable = false;

  @Input()
  item!: Item;

  @Input() 
  newItem!: string;
  
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }

}
