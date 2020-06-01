import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListProcessComponent } from '../list-process/list-process.component';
import { AdminComponent } from '../admin/admin.component';
import { ConfirmProcessComponent } from '../confirm-process/confirm-process.component';
import { YourProcessComponent } from '../your-process/your-process.component';
import { SettingComponent } from '../admin/setting/setting.component';
import { ProcessDetailComponent } from '../process-detail/process-detail.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: 'list',
        component: ListProcessComponent
      },
      {
        path: 'confirm',
        component: ConfirmProcessComponent
      },
      {
        path: 'yours-process',
        component: YourProcessComponent
      },
      {
        path: 'home/setting',
        component: SettingComponent
      },
      {
        path: 'process-detail',
        component: ProcessDetailComponent
      }

    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
