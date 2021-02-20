import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VetementsComponent } from './vetements/vetements.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './admin/create/create.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { UpdateComponent } from './admin/update/update.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'header/head', component: HeaderComponent },
  { path: 'vetements/vet', component: VetementsComponent },
  { path: 'categories/cat', component: CategoriesComponent },
  { path: 'profiles/profil', component: ProfilesComponent },
  { path: 'dasboard/dash', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VetementsComponent,
    CategoriesComponent,
    ProfilesComponent,
    DashboardComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
