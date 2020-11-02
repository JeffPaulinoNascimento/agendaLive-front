import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivesRoutingModule } from './lives-routing.module';
import {HomeComponent} from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {LiveListComponent} from './home/live-list/live-list.component';
import {LiveFormDialogComponent} from './home/live-form-dialog/live-form-dialog.component';
import {LocalDateTimePipe} from '../../shared/pipe/local-date-time.pipe';


@NgModule({
  declarations: [HomeComponent, LiveListComponent, LiveFormDialogComponent, LocalDateTimePipe],
  imports: [
    CommonModule,
    LivesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressBarModule
  ],
  providers: [LocalDateTimePipe]
})
export class LivesModule { }
