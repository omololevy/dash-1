import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonDirectivesModule } from '../../directives/common/common-directives.module';
import { HomeComponent } from './home.component';
import { HomeRoutes } from "./home.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    CommonDirectivesModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
