import { NgxUiLoaderConfig, SPINNER } from 'ngx-ui-loader';

export const globalLoaderConfig: NgxUiLoaderConfig = {
  fgsType: 'three-strings',
  fgsColor: '#1976d2',
  fgsSize: 70,
  overlayColor: 'rgba(255,255,255,0.8)',
  hasProgressBar: false,
  masterLoaderId: 'master',
  overlayBorderRadius: '4px',
  gap: 24,
  blur: 8,
  // text: 'Loading Enquiries...',
  textColor: '#1976d2',
  textPosition: 'center-center',
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: 'assets/loader-logo.png'  // Add your logo if needed
};
