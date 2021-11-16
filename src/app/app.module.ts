import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderAdminComponent } from './shared/components/header-admin/header-admin.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HeaderAdminComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
