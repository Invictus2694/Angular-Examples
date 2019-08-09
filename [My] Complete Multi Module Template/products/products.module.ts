import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './add-product.component';
import { DisplayProductComponent } from './display-product.component';
import { RouterModule } from '@angular/router';

var productRules=[

     {path:'addproduct', component: AddProductsComponent},
     { path: 'displayproduct', component: DisplayProductComponent}

]

@NgModule({
    imports: [CommonModule,RouterModule.forChild(productRules),RouterModule],
    exports: [],
    declarations: [AddProductsComponent,DisplayProductComponent],
    providers: [],
})
export class ProductsModule { }
