import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeMobileNav(){
    let checkbox = document.getElementById('nav-check') as HTMLInputElement;
    checkbox.checked = false;
  }

}
