import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';


//import { AuthGuard } from './guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
  //{ path: 'cursos', 
     //loadChildren: 'app/cursos/cursos.module#CursosModule'
      //,
      //canActivate: [AuthGuard],
      //canActivateChild: [CursosGuard],
      //canLoad: [AuthGuard]
  //},
  //{ path: 'alunos',
    //  loadChildren: 'app/alunos/alunos.module#AlunosModule'
      //,
      //canActivate: [AuthGuard],
      //canActivateChild: [AlunosGuard]
      //canLoad: [AuthGuard]
  //},
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  // { path: 'cursos', loadChildren: './src/app/cursos/cursos.module#CursosModule'},
  { 
    path: 'cursos', 
    loadChildren: () => import('src/app/cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  
  { path: 'login', component: LoginComponent },
  // { path: 'alunos', loadChildren: './app/alunos/alunos.module#AlunosModule'},
  { 
    path: 'alunos', 
    loadChildren: () => import('src/app/alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard]
  },
  { path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard], 
    canLoad: [AuthGuard]
  },
  
      //,
      //canActivate: [AuthGuard] 
  //},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
