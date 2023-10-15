import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gitstats',
  templateUrl: './gitstats.component.html',
  styleUrls: ['./gitstats.component.css']
})
export class GitstatsComponent {
  @Input() userInfo: any;
  gitData: any;

}
