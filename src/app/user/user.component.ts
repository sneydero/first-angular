import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) id!: string;
  @Input({required:true}) avatar!: String;
  @Input({required:true}) name!: String;
  @Output() select = new EventEmitter();

  /*THIS WAY IS WITH A RECENT VERSION OF ANGULAR
  // avatar = input.required<string>();
  // name = input.required<string>();
    
  // imagePath = computed(() => {
  //   return 'assets/users/'+ this.avatar();
  // })
  */

  get imagePath(){
    return 'assets/users/'+ this.avatar;
  }

  onSelectUser(){
    this.select.emit(this.id);
  }
}
