import { NgxUiLoaderConfig, SPINNER } from 'ngx-ui-loader';

export const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#00ACC1',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: SPINNER.ballSpinClockwise,
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: '#00ACC1',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: "square-jelly-box",
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#00ACC1',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: 'Loading...',
  textColor: '#FFFFFF',
  textPosition: 'center-center'
};


// <ngx-ui-loader
//   fgsColor="#ff4081"
//   pbColor="#ff4081"
//   fgsType="square-jelly-box"
//   text="Please Wait..."
//   textColor="#fff"
//   [hasProgressBar]="true"
//   [overlayColor]="'rgba(40,40,40,0.8)'"
//   blur="10"
//   [fgsPosition]="'center-center'"
//   overlayBlur="5">
// </ngx-ui-loader>
