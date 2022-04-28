import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AquidanUI';
  isLoading  =true;

ngOnInit() {
this.isLoading = true;
}
ngAfterViewInit() {
  this.isLoading = false;
}
  reloadCurrentPage() {
    window.location.reload();
   }
}

