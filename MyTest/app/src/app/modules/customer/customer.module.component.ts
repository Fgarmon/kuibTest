///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { IntlService, CldrIntlService } from '@progress/kendo-angular-intl';
import { TranslationsProvider } from './../../core/translations.provider';

@Component({
    templateUrl: './customer.module.component.html',
    styleUrls: ['./customer.module.component.css'],
})
export class CustomerModuleComponent {
    constructor(private intlService: IntlService, private translationsProvider: TranslationsProvider) {
        translationsProvider.localeChanges.subscribe(locale => {
            (this.intlService as CldrIntlService).localeId = locale;
        });
    }
}
