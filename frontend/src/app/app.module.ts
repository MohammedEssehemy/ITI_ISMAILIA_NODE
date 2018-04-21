import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NotePageComponent } from './components/note-page/note-page.component';
import { NoteFormComponent } from './components/note-form/note-form.component';

// services
import {UserService} from './services/user.service';
import {NoteService} from './services/note.service';


const appRoutes:Routes = [
{path:'',component: HomeComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'note',component:NotePageComponent},
{path:'*',component: HomeComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NoteItemComponent,
    NoteListComponent,
    NotePageComponent,
    NoteFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
  ],
  providers: [UserService,NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
