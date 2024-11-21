import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(private ngxLoader: NgxUiLoaderService) {}

  start(loaderId: string = 'master') {
    this.loadingSubject.next(true);
    this.ngxLoader.startLoader(loaderId);
  }

  stop(loaderId: string = 'master') {
    this.loadingSubject.next(false);
    this.ngxLoader.stopLoader(loaderId);
  }

  startBackground(loaderId: string = 'master-background') {
    this.ngxLoader.startBackground(loaderId);
  }

  stopBackground(loaderId: string = 'master-background') {
    this.ngxLoader.stopBackground(loaderId);
  }

  clear() {
    this.ngxLoader.stopAll();
    this.loadingSubject.next(false);
  }
}
