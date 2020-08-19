import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CategoryListPageComponent } from './components/category-list-page/category-list-page.component';
import { AddCategoryPageComponent } from './components/add-category-page/add-category-page.component';
import { ResourceListPageComponent } from './components/resource-list-page/resource-list-page.component';
import { AddResourcePageComponent } from './components/add-resource-page/add-resource-page.component';
import { ResourcePageComponent } from './components/resource-page/resource-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    LandingPageComponent,
    RegisterPageComponent,
    CategoryListPageComponent,
    AddCategoryPageComponent,
    ResourceListPageComponent,
    AddResourcePageComponent,
    ResourcePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
