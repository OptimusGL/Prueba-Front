import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { CarruselComponent } from './pages/carrusel/carrusel.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { authGuard } from './utils/auth.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'inicio', component: LandingPageComponent },
    { path: 'carrusel', component: CarruselComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'signIn', component: SignInComponent },
    // { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: 'errorPage', component: ErrorPageComponent },
    { path: '**', redirectTo: '/errorPage', pathMatch: 'full' }
];
