import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  public visible = true;
  public login!: string;
  public password!: string;
  public email!: string;
  public mas: any = [];
  public editnum!: number;
  public test1 = /^[a-zA-Z]{4,15}$/;
  public test2 = /^[\w.\-_]{4,15}$/;
  public test3 = /^[\w\-.]+@[a-z.]+$/;
  add() {
    if (this.test1.test(this.login) == true
      && this.test2.test(this.password) == true
      && this.test3.test(this.email) == true) {
      let arr = {
        login: this.login,
        password: this.password,
        email: this.email
      }
      this.mas.push(arr);
      this.login = "";
      this.password = "";
      this.email = "";
    }
    else {
      alert("Ви щось ввели не правильно")
    }
  }
  deletef(index: number) {
    this.mas.splice(index, 1);
  }
  editf(index: number) {
    this.visible = false;
    this.login = this.mas[index].login;
    this.password = this.mas[index].password;
    this.email = this.mas[index].email;
    this.editnum = index;
  }
  mainedit() {
    if (this.test1.test(this.login) == true
      && this.test2.test(this.password) == true
      && this.test3.test(this.email) == true) {
      this.mas[this.editnum].login = this.login;
      this.mas[this.editnum].password = this.password;
      this.mas[this.editnum].email = this.email;
      this.visible = true;
      this.login = "";
      this.password = "";
      this.email = "";
    }
    else {
      alert("Ви щось ввели не правильно")
    }
  }
  constructor() { }

  ngOnInit(): void {
  }


}
