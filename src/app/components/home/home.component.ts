import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    role: string = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.role = this.route.snapshot.queryParamMap.get('role') || 'User';
    }
}
