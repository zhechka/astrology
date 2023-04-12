import { Component } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { servicesData } from './data/services-data';
import { DialogComponent, DialogData } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: DialogData[] = servicesData;

  public slides: string[] = ['./assets/feedback1.jpg', './assets/feedback2.jpg','./assets/feedback3.jpg','./assets/feedback4.jpg','./assets/feedback5.jpg','./assets/feedback6.jpg','./assets/feedback7.jpg','./assets/feedback8.jpg','./assets/feedback9.jpg','./assets/feedback10.jpg','./assets/feedback11.jpg','./assets/feedback12.jpg','./assets/feedback13.jpg', './assets/feedback14.jpg', './assets/feedback15.jpg']

  constructor(public dialog: MatDialog) {}

  openDialog(data: DialogData) {
    this.dialog.open(DialogComponent, { data });
  }
}
