import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'asyncpipe'
})
export class AsyncpipePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
   transform(value:string) {
     return this.sanitizer.bypassSecurityTrustResourceUrl(value);
   }
}
