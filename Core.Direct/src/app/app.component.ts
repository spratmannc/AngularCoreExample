import { Component } from '@angular/core';
import { People } from "./values.i18n";
import { Http } from "@angular/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent {
    title = 'app';
    people = [People.Kid, People.Mother, People.Father];

    constructor(private _http: Http) {

    }

    loadMore() {
        this._http.get("/api/values")
            .subscribe(result => {
                for (let person of result.json()) {
                    this.people.push(person);
                }
            })

    }

}
