import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private rota:Router){}

  formulario = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  senha: new FormControl('', Validators.required)
  });

  autenticar():void{
    if(this.formulario.value.email === 'contato@ralflima.com'
     &&
      this.formulario.value.senha === '123') {
        localStorage.setItem('email', this.formulario.value.email)
        this.rota.navigateByUrl('/admin')
    }else{
      alert('Email ou senha incorretas.')
    }
  }
}
