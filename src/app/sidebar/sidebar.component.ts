import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // @ViewChild('menuBtn') menuBtn: MatMenuTrigger;
  navItems: any[] = [{
    displayName: 'Project Name',
    type: 'heading'
  }, {
    displayName: 'Project',
    type: 'list',
    children: [
      {
        displayName: 'Project Setup',
        type:'list'
      }
    ]
  }, {
    displayName: 'Documents',
    type: 'list',
    children: [
      {
        displayName: 'Upload New Docs',
        type:'list'
      },
      {
        displayName: 'Yet to be validated',
        type:'list'
      },
      {
        displayName: 'Review',
        type:'list'
      }
    ]
  }, {
    displayName: 'Templates',
    type: 'list',
    children: [
      {
        displayName: 'Create New',
        type:'list'
      },
      {
        displayName: 'Review Templates',
        type:'list'
      }
    ]
  }
  ]
  constructor() { }

  ngOnInit(): void {

  }
}
