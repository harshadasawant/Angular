import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputoutputpropertiesComponent } from './inputoutputproperties/inputoutputproperties.component';
import { ChildComponent } from './child/child.component';
import { RedElDirective } from './red-el.directive';
import { HostBindingColorDirective } from './host-binding-color.directive';
import { PipeComponent } from './pipe/pipe.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import {TestService} from './services/test.service';
import { DITestComponent } from './ditest/ditest.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapCompComponent } from './bootstrap-comp/bootstrap-comp.component';
import { HookParentComponent } from './hook-parent/hook-parent.component';
import { HookChildComponent } from './hook-child/hook-child.component';

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
    DITestComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    BootstrapCompComponent,
    HookParentComponent,
    HookChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [TestService], //need to register service for dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }
