import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableViewComponent } from "./Components/table-view/table-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Table';
}
