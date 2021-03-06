import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { usuario } from '../model/usuario';
import { usuarioLogin } from '../model/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(UsuarioLogin: usuarioLogin): Observable<usuarioLogin> {
    return this.http.post<usuarioLogin>('http://localhost:8080/usuarios/logar', UsuarioLogin)
  }

  cadastrar(usuario: usuario): Observable<usuario> {
    return this.http.post<usuario>('http://localhost:8080/usuarios/cadastrar', usuario)
  }

  getByIdUsuario(id: number): Observable<usuario> {
    return this.http.get<usuario>(`http://localhost:8080/usuarios/${id}`)
  }

  logado() {

    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }

  
  adm(){
    let ok: boolean = false

    if(environment.tipo == 'adm'){
      ok = true
    }

    return ok
  } 
  
}
