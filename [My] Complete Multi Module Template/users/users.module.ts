import { AddUsersComponent } from './add-users.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SelectUsersComponent } from './select-users.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

var userRules=[

    {path:"addusers", component:AddUsersComponent},
    {path: "selectusers", component: SelectUsersComponent},
    {path: "login", component:LoginComponent}
    ]

@NgModule({
    imports: [CommonModule,RouterModule.forChild(userRules),RouterModule],
    exports: [],
    declarations: [SelectUsersComponent,AddUsersComponent,LoginComponent],
    providers: [],
})
export class UsersModule { }
