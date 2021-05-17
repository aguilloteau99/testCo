import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product';
import { AlertComponent } from './alert/alert';
@NgModule({
	declarations: [ProductComponent,
    AlertComponent],
	imports: [],
	exports: [ProductComponent,
    AlertComponent]
})
export class ComponentsModule {}
