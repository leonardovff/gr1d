import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../../../environments/environment';
import { MatSnackBar } from '@angular/material';
@Component({

  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: any = null;
  isLoading: boolean = false;
  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
  ) { }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers(){
    this.isLoading = true;
    this.http.get(environment.api + 'users').subscribe(
      res => {
        this.users = res;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        this.snack.open('Erro ao carregar a lista de usuários', '', {
          duration: 2000
        })
      }
    );
  }

}
