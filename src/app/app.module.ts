import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './service/http-service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskHomeComponent } from './components/task-home/task-home.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { UserListPopupComponent } from './components/user-list-popup/user-list-popup.component';
import { MatCardModule } from '@angular/material/card';
import { LoaderComponent } from './shared/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreateUpdateTaskPopupComponent } from './components/create-update-task-popup/create-update-task-popup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MdePopoverModule } from '@material-extended/mde';

@NgModule({
  declarations: [
    AppComponent, TaskHomeComponent, UserListPopupComponent,
    LoaderComponent, CreateUpdateTaskPopupComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    FormsModule, ReactiveFormsModule, MatToolbarModule,
    FlexLayoutModule, MatButtonModule, MatIconModule,
    DragDropModule, MatDialogModule, MatCardModule,
    MatProgressSpinnerModule, BrowserAnimationsModule, MatFormFieldModule,
    MatInputModule, MatSelectModule,MatDatepickerModule,
    MatNativeDateModule, MatSnackBarModule, MatTooltipModule,
    MdePopoverModule
  ],
  providers: [HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [UserListPopupComponent, CreateUpdateTaskPopupComponent]
})
export class AppModule { }
