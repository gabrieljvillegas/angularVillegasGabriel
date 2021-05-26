import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NotfoundComponent
  ]
})
export class SharedModule { }
