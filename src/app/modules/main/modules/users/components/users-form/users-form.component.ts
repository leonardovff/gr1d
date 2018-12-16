import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements AfterViewInit {
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
  user = null;
  isLoading: boolean = false;
  id = null;
  isPasswordHidden: boolean = true;
  form:FormGroup = new FormGroup({
    'name': new FormControl(null, [
      Validators.required, 
      Validators.maxLength(100)
    ]), 
    'password': new FormControl(null, [
      Validators.required,
      Validators.maxLength(50)
    ]),
    'email': new FormControl(null, [
      Validators.required, 
      Validators.email
    ]),
    'phone': new FormControl(null, [
      Validators.required
    ])
  })

  constructor(
    private dialog: MatDialog, 
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router, 
    private snack: MatSnackBar
  ) { }
  dialogRef = null;
  ngAfterViewInit() {

    setTimeout(() => {
      this.open();
    });
    this.id = this.route.snapshot.params['id'];
    if(!this.id) return this.id = null;
    this.isLoading = true;
    this.http.get('users/' + this.id)
      .subscribe(res => {
        this.form.patchValue(res);
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        this.snack.open('Erro ao carregar os dados do usuário', '', {
          duration: 2000
        })
      });
  }
  save(){
    if(!this.form.valid) return false;
    this.isLoading = true;
    this.http.post('users' + (this.id ? '/' + this.id : ''), this.form.value)
      .subscribe(res => {
        let id = this.id;
        setTimeout(()=>{
          this.snack.open(id ? 'Usuário editado com sucesso' : 'Usuário adicionado com sucesso', '', {
            duration: 3000
          })
        },400);
        this.isLoading = false;
        if(!id){
          this.id = res['id'];
        }
        this.dialogRef.close(0);
      }, () => {
        this.isLoading = false;
        this.snack.open('Erro ao salvar os dados do usuário', '', {
          duration: 3000
        })
      });
    }
  open() {
    this.dialogRef = this.dialog.open(this.dialogTemplate, {
      panelClass: 'modalActions',
      maxWidth: "auto"
    });
    this.dialogRef.afterClosed().subscribe(res =>{
      if(!res || res == 2 ){
        this.router.navigate(["./"+ ( this.id ? this.id : '')]);
      }
    });
  }
}
