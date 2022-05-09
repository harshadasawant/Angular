import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputoutputpropertiesComponent } from './inputoutputproperties/inputoutputproperties.component';
import { ChildComponent } from './child/child.component';
import { RedElDirective } from './red-el.directive';
import { HostBindingColorDirective } from './host-binding-color.directive';
import { PipeComponent } from './pipe/pipe.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import {TestService} from './services/test.service';
import { DITestComponent } from './ditest/ditest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StylebindingComponent,
    DataBindingComponent,
    InputoutputpropertiesComponent,
    ChildComponent,
    RedElDirective,
    HostBindingColorDirective,
    PipeComponent,
    UsdInrPipe,
    DITestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TestService], //need to register service for dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }
