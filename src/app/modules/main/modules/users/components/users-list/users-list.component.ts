import { Component, OnInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { SidenavService } from 'src/app/modules/main/main/sidenav.service';
@Component({

  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @ViewChild('name') name:  ElementRef;
  users: any = null;
  usersCopy: any = null;
  isLoading: boolean = false;
  isSearchActived: boolean = true;
  stringToSearch = "";
  constructor(
    private http: HttpClient,
    private snack: MatSnackBar,
    private sidenav: SidenavService,
    private renderer: Renderer
  ) { }
  ngOnInit() {
    this.loadUsers();
  }
  showSearch(){
    this.isSearchActived = true;
    this.stringToSearch = "";
    this.users = this.usersCopy;
    setTimeout(() => {
      this.renderer.invokeElementMethod(this.name.nativeElement,   'focus', []);
    });
  }
  closeSearch(){
    this.isSearchActived = false;
    this.users = this.usersCopy;
  }
  search(){
    this.users = this.usersCopy.filter(
      user => user.name.toLowerCase().indexOf(this.stringToSearch.toLowerCase()) != -1
    );
  }
  loadUsers(){
    this.isLoading = true;
    this.http.get('users').subscribe(
      res => {
        this.users = res;
        this.usersCopy = res;
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
