import { CanActivateFn, Router } from '@angular/router';
// Sempre retorna um valor booleano
export const autenticarGuard: CanActivateFn = (route, state) => {
    // Importar a classe Router
    const rota = new Router;

    // Validacao - localstorage
    if (localStorage.getItem('email') == undefined){
        rota.navigateByUrl('/login');

    }
  return true;
};