import { NgModule } from '@angular/core';
import { UiComponentsComponent } from './ui-components.component';
import { ButtonComponent } from './button/button.component';
import { ParagraphComponent } from './paragraph/paragraph.component';

@NgModule({
  declarations: [UiComponentsComponent, ButtonComponent, ParagraphComponent],
  imports: [],
  exports: [UiComponentsComponent, ButtonComponent, ParagraphComponent]
})
export class UiComponentsModule { }
