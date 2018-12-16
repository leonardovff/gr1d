import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../../../environments/environment';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  users = [
    {
      name: "Leonardo Victor Fernandes Ferreira"
    },
    {
      name: "Leonardo Victor Fernandes Ferreira"
    },
    {
      name: "Pedro de Paulo Ferreira"
    },
    {
      name: "Adriana Martins dos Santos"
    },
    {
      name: "Leonardo Victor Fernandes Ferreira"
    },
    {
      name: "Pedro de Paulo Ferreira"
    },
    {
      name: "Adriana Martins dos Santos"
    },
    {
      name: "Leonardo Victor Fernandes Ferreira"
    },
    {
      name: "Pedro de Paulo Ferreira"
    },
    {
      name: "Adriana Martins dos Santos"
    },
    {
      name: "Leonardo Victor Fernandes Ferreira"
    },
    {
      name: "Pedro de Paulo Ferreira"
    },
    {
      name: "Adriana Martins dos Santos"
    },
    {
      name: "Leonardo Victor Fernandes Ferreira"
    },
    {
      name: "Pedro de Paulo Ferreira"
    },
    {
      name: "Adriana Martins dos Santos"
    },
    {
      name: "Leonardo Victor Fernandes Ferreira"
    },
    {
      name: "Pedro de Paulo Ferreira"
    },
    {
      name: "Adriana Martins dos Santos"
    },
    {
      name: "Leonardo Victor Fernandes Ferreira"
    },
    {
      name: "Pedro de Paulo Ferreira"
    },
    {
      name: "Adriana Martins dos Santos"
    },
    {
      name: "Leonardo Victor Fernandes Ferreira"
    },
    {
      name: "Pedro de Paulo Ferreira"
    },
    {
      name: "Adriana Martins dos Santos"
    },
    {
      name: "Leonardo Victor Fernandes Ferreira"
    },
    {
      name: "Pedro de Paulo Ferreira"
    },
    {
      name: "Adriana Martins dos Santos"
    },
    {
      name: "Leonardo Victor Fernandes Ferreira"
    },
    {
      name: "Pedro de Paulo Ferreira"
    },
    {
      name: "Adriana Martins dos Santos"
    }
  ];
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers(){
    this.http.get(environment.api + 'users').subscribe(res => {
      
    });
  }

}
