import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/common/layouts/auth-layout/auth-layout.component';

import { AuthService } from './services/auth/auth.service';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    // { path: 'Supplier', loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(x=>x.CustomerAppSupplierModule' },
    // loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(x => x.CustomerAppSupplierModule)
    path: 'home', 
    loadChildren: () => import('./views/home/home.module').then(x=>x.HomeModule),
    data: { title: 'Egret'}
  },
  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'sessions', 
        loadChildren: () => import('./views/sessions/sessions.module').then(x=>x.SessionsModule),
        data: { title: 'Session'} 
      }
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthService],
    children: [
      { 
        path: 'dashboard', 
        loadChildren: () => import('./views/dashboard/dashboard.module').then(x=>x.DashboardModule), 
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
      },
      {
        path: 'material', 
        loadChildren: () => import('./views/material/app-material.module').then(x=>x.AppMaterialModule), 
        data: { title: 'Material', breadcrumb: 'MATERIAL'}
      },
      {
        path: 'dialogs', 
        loadChildren: () => import('./views/app-dialogs/app-dialogs.module').then(x=>x.AppDialogsModule), 
        data: { title: 'Dialogs', breadcrumb: 'DIALOGS'}
      },
      {
        path: 'profile', 
        loadChildren: () => import('./views/profile/profile.module').then(x=>x.ProfileModule), 
        data: { title: 'Profile', breadcrumb: 'PROFILE'}
      },
      {
        path: 'others', 
        loadChildren: () => import('./views/others/others.module').then(x=>x.OthersModule), 
        data: { title: 'Others', breadcrumb: 'OTHERS'}
      },
      {
        path: 'tables', 
        loadChildren: () => import('./views/tables/tables.module').then(x=>x.TablesModule), 
        data: { title: 'Tables', breadcrumb: 'TABLES'}
      },
      {
        path: 'tour', 
        loadChildren: () => import('./views/app-tour/app-tour.module').then(x=>x.AppTourModule), 
        data: { title: 'Tour', breadcrumb: 'TOUR'}
      },
      {
        path: 'forms', 
        loadChildren: () => import('./views/forms/forms.module').then(x=>x.AppFormsModule), 
        data: { title: 'Forms', breadcrumb: 'FORMS'}
      },
      {
        path: 'charts', 
        loadChildren: () => import('./views/charts/charts.module').then(x=>x.AppChartsModule), 
        data: { title: 'Charts', breadcrumb: 'CHARTS'}
      },
      {
        path: 'map', 
        loadChildren: () => import('./views/map/map.module').then(x=>x.AppMapModule), 
        data: { title: 'Map', breadcrumb: 'MAP'}
      },
      {
        path: 'dragndrop', 
        loadChildren: () => import('./views/dragndrop/dragndrop.module').then(x=>x.DragndropModule), 
        data: { title: 'Drag and Drop', breadcrumb: 'DND'}
      },
      {
        path: 'inbox', 
        loadChildren: () => import('./views/app-inbox/app-inbox.module').then(x=>x.AppInboxModule), 
        data: { title: 'Inbox', breadcrumb: 'INBOX'}
      },
      {
        path: 'calendar', 
        loadChildren: () => import('./views/app-calendar/app-calendar.module').then(x=>x.AppCalendarModule), 
        data: { title: 'Calendar', breadcrumb: 'CALENDAR'}
      },
      {
        path: 'chat', 
        loadChildren: () => import('./views/app-chats/app-chats.module').then(x=>x.AppChatsModule), 
        data: { title: 'Chat', breadcrumb: 'CHAT'}
      },
      {
        path: 'icons', 
        loadChildren: () => import('./views/mat-icons/mat-icons.module').then(x=>x.MatIconsModule), 
        data: { title: 'Icons', breadcrumb: 'MATICONS'}
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

