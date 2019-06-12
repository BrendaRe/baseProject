import { Component } from "@angular/core";

@Component({
    selector: 'app-lista-sono',
    templateUrl: './lista-sono.component.html',
    styleUrls: ['./lista-sono.component.css']
})

export class AppListaSonoComponent {
    people: any[] = [
        {
            age: 30,
            name:'João',
            level: 'P'
        },
        {
            age: 20,
            name: 'Maria',
            level: 'M',
        },
        {
            age: 25,
            name: 'Joana',
            level: 'G',
        },
        {
            age: 28,
            name: 'José',
            level: 'P',
        },
        {
            age: 22,
            name: 'Bruno',
            level: 'M',
        },
        {
            age: 19,
            name: 'Beatriz',
            level: 'D',
        },
    ];
  }
  