import {Component, ViewEncapsulation} from '@angular/core';
import {TopPaneConfig} from "@solenopsys/ui-navigate";
import {Navigate} from "@ngxs/router-plugin";
import {Store} from "@ngxs/store";

@Component({
    selector: 'sc-base-layout',
    templateUrl: './base-layout.component.html',
    styleUrls: ['./base-layout.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class BaseLayoutComponent {

    config: TopPaneConfig = {
        tabsState: {
            current: "home",
            tabs: [
                {
                    id: "home",
                    title: "Home"
                },
                {
                    title: "Documentation", id: "docs"
                },
                {
                    title: "Community", id: "community"
                },
                {
                    title: "Ecosystem", id: "ecosystem"
                }
            ]
        }
        ,
        actions: [
            {
                key: "create",
                title: "Create",
                icon: "add",
            }]
    }

    constructor(private store: Store) {
    }

    tebSelect($event: string) {
        this.store.dispatch(new Navigate([$event]));
    }
}
