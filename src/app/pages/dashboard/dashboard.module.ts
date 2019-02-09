import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
