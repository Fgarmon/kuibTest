/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Component, Optional } from '@angular/core';
import { UserGridViewComponent } from './user-grid.view.component';

@Component({
    selector: 'kb-top-section',
    templateUrl: './topSection.html',
})
export class TopSectionComponent {
    constructor(@Optional() public parent: UserGridViewComponent) {}
}
