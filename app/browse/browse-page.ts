<<<<<<< HEAD
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
=======
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";
>>>>>>> a6bbb076e7a83d859d737eb4ec4b62b2cb140bb1
import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { BrowseViewModel } from "./browse-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new BrowseViewModel();
}

export function onDrawerButtonTap(args: EventData) {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
