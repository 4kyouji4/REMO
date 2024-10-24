import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './product/productcomponent';
import { FilterComponent } from './filter/filter.component';
import { ReviewComponent } from './review/review.component';
import { NewsComponent } from './news/news.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'product', component: ProductComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'about-us', component: AboutUsComponent }, 
  { path: 'review', component: ReviewComponent },
  { path: 'admin/admin-login', component: LoginComponent },
  { path: 'admin', redirectTo: 'admin/admin-login', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
