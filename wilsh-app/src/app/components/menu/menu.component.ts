import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public showMenu: boolean;

  constructor() {

  }

  ngOnInit() {
    this.showMenu = false;

  }


  toggleMenu() {
    let menuBtn = document.querySelector('.menu-btn')
    let menu = document.querySelector('.menu')
    let menuNav = document.querySelector('.menu-nav')


    let navItems = document.querySelectorAll('.nav-item')


    if (!this.showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');

      navItems.forEach(item => item.classList.add('show'));


      //set menu state
      this.showMenu = true;
    } else {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');

      navItems.forEach(item => item.classList.remove('show'));


      //set menu state
      this.showMenu = false;
    }
  }

}
