import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1.component';
import { Component2Component } from './scenario2/component2.component';
import { Component3Component } from './scenario3/scenario3parent/component3.component';
import { Component3childComponent } from './scenario3/scenario3child/component3child.component';
import { ParentComponent } from './scenario4/parent/parent.component';
import { ChildComponent } from './scenario4/child/child.component';
import { GrandparentComponent } from './scenario5/grandparent/grandparent.component';
import { ParentScenario5Component } from './scenario5/parent-scenario5/parent-scenario5.component';
import { ChildScenario5Component } from './scenario5/child-scenario5/child-scenario5.component';
import { Parentscenario6Component } from './scenario6/parentscenario6/parentscenario6.component';
import { Sibling1Component } from './scenario6/sibling1/sibling1.component';
import { Sibling2Component } from './scenario6/sibling2/sibling2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component3childComponent,
    ParentComponent,
    ChildComponent,
    GrandparentComponent,
    ParentScenario5Component,
    ChildScenario5Component,
    Parentscenario6Component,
    Sibling1Component,
    Sibling2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
