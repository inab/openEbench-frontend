import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { Link } from '../Link'

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
    @Input() items: Link[]
    @ViewChild('childMenu', { static: true }) public childMenu
    constructor(public router: Router) {}

    ngOnInit() {}
}
