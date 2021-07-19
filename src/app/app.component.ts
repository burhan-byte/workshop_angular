import { MediaMatcher } from '@angular/cdk/layout'
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  //ปิด sidenav เมื่อมีการย่อหน้าจอ

  mobileQueryMax : MediaQueryList;

  private _modileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
    this._modileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQueryMax = media.matchMedia('(max-width: 600px)');
    this.mobileQueryMax.addListener(this._modileQueryListener);

  }
  ngOnDestroy(): void {
    this.mobileQueryMax.removeListener(this._modileQueryListener);
  }
}
