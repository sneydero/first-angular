import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) avatar!: String;
  @Input({required:true}) name!: String;
    

  get imagePath(){
    return 'assets/users/'+ this.avatar;
  }

  onSelectUser(){
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
