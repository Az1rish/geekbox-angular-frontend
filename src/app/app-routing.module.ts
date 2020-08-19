import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CategoryListPageComponent } from './components/category-list-page/category-list-page.component';
import { AddCategoryPageComponent } from './components/add-category-page/add-category-page.component';
import { ResourceListPageComponent } from './components/resource-list-page/resource-list-page.component';
import { AddResourcePageComponent } from './components/add-resource-page/add-resource-page.component';
import { ResourcePageComponent } from './components/resource-page/resource-page.component';
// import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'signin', component: SignInPageComponent },
  { path: 'categories', component: CategoryListPageComponent },
  { path: 'categories/add', component: AddCategoryPageComponent },
  { path: 'categories/:categoryId', component: ResourceListPageComponent },
  { path: 'resource/add', component: AddResourcePageComponent },
  { path: 'resource/:resourceId', component: ResourcePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
