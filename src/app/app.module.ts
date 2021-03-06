import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppAngularMaterialModule } from './app-angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { CreateItemComponent } from './items/create-item/create-item.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MarkerDialogComponent } from './map/marker-dialog/marker-dialog.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { EditItemComponent } from './items/edit-item/edit-item.component';
import { ItemDialogComponent } from './map/item-dialog/item-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    CreateItemComponent,
    LoginComponent,
    SignupComponent,
    ErrorDialogComponent,
    MarkerDialogComponent,
    ProfileComponent,
    NotificationComponent,
    DateAgoPipe,
    EditItemComponent,
    ItemDialogComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppAngularMaterialModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ErrorDialogComponent, MarkerDialogComponent ]
})
export class AppModule { }
