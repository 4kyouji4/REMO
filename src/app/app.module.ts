import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './admin/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/productcomponent';
import { UsersService } from './services/users.service';
import { FilterComponent } from './filter/filter.component';
<<<<<<< HEAD
import { ReviewComponent } from './review/review.component';
=======
import { NewsComponent } from './news/news.component';
>>>>>>> 002f1fa4af40d47f51a8d41218ae1b743321adcf

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutUsComponent,
    LoginComponent,
    FilterComponent,
<<<<<<< HEAD
    ReviewComponent,
=======
    NewsComponent,
>>>>>>> 002f1fa4af40d47f51a8d41218ae1b743321adcf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
