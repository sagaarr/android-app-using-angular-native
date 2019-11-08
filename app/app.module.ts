import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptFormsModule } from 'nativescript-angular/forms'
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client"
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptUIChartModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptUIListViewModule
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
