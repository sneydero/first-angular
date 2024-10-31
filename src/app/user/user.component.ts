import { Component, computed, EventEmitter, Input, input, output, Output} from '@angular/core';
import { User } from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!: boolean;
  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: String;
  // @Input({required:true}) name!: String;
  @Output() select = new EventEmitter<string>();

  //select = output<string>();

  /*THIS WAY IS WITH A RECENT VERSION OF ANGULAR
  // avatar = input.required<string>();
  // name = input.required<string>();
    
  // imagePath = computed(() => {
  //   return 'assets/users/'+ this.avatar();
  // })
  */

  get imagePath(){
    return 'assets/users/'+ this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
