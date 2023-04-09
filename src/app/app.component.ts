import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'astrology';

  public items: {title: string; description: string}[] = [{title: 'Some title', description: 'ololololololol'}, {title: 'Some title', description: 'ololololololol'}, {title: 'Some title', description: 'ololololololol'}]

  public feedbacks: string[] = ['./assets/1cat.jpeg', './assets/2cat.jpeg', './assets/3cat.jpeg', './assets/2cat.jpeg', './assets/1cat.jpeg']
}
