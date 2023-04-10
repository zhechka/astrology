import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogData } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'astrology';

  public items: DialogData[] = [{title: 'Some title', description: 'ololololololol', shortDescription: 'kjdfklsdjlfj df df df d fd d d f f ddd fd f  fddfdf df dd ddslkfjdskl', price: 20}, {title: 'Some title', description: 'ololololololol',shortDescription: 'kjdfkl d df d fd fd f f e wefknefknfd fd  kd fkd fd fkd fdjlfjdslkfjdskl', price: 200}, {title: 'Some title', description: 'ololololololol',shortDescription: 'kjdfklsdffmdfkmdf d fmdfmdfmd d fd k kd fld flk flsd flds flkds fdsjlfjdslkfjdskl', price: 50}]

  public slides: string[] = ['./assets/3cat.jpeg', './assets/3cat.jpeg', './assets/3cat.jpeg', './assets/3cat.jpeg', './assets/3cat.jpeg']

  constructor(public dialog: MatDialog) {}

  openDialog(data: DialogData) {
    this.dialog.open(DialogComponent, { data });
  }
}
