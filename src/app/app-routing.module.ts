import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeskComponent } from './components/desk/desk.component';
import { HomeComponent } from './components/home/home.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { MessageComponent } from './components/message/message.component';
import { OutboxComponent } from './components/outbox/outbox.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'desk',
    component: DeskComponent,
    children: [
      { path: 'outbox', component: OutboxComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'message', component: MessageComponent },
    ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
