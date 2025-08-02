import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarVisibilityService {

  private navbarVisible = new BehaviorSubject<boolean>(true);
  navbarVisible$ = this.navbarVisible.asObservable();

  setVisibility(isVisible: boolean) {
    this.navbarVisible.next(isVisible);
  }
}
