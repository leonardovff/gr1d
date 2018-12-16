import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements AfterViewInit {
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
  user = null;
  isLoading: boolean = false;
  constructor(
    private dialog: MatDialog, 
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router, 
    private snack: MatSnackBar
  ) { }
  dialogRef = null;
  ngAfterViewInit() {
    this.isLoading = true;
    this.http.get('users/' + this.route.snapshot.params['id'])
      .subscribe(res => {
        this.user = res;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        this.snack.open('Erro ao carregar os dados do usuário', '', {
          duration: 2000
        })
      });
    setTimeout(() => {
      this.open();
    });
  }
  open() {
    this.dialogRef = this.dialog.open(this.dialogTemplate, {
      panelClass: 'modalActions',
      maxWidth: "auto"
    });
    this.dialogRef.afterClosed().subscribe(res =>{
      if(!res){
        console.log('' + this.user.id);
        this.router.navigate(['./../']);
      }
    });
  }
}
