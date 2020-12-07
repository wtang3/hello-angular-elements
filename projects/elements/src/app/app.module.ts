import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { UiComponentsModule, ButtonComponent, ParagraphComponent } from 'ui-components';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule,
    UiComponentsModule
  ],
  providers: []
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const buttonComponent = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('lib-button', buttonComponent);

    const paragraphComponent = createCustomElement(ParagraphComponent, { injector: this.injector });
    customElements.define('custom-paragraph', paragraphComponent);
  }

}
