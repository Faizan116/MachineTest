import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFilter'
})
export class PhoneFilterPipe implements PipeTransform {

  transform(value: string): string {
    
    if(!value.match("^[0-9]+$")){
        return "NA";
    }
else{
    return value;
  }

  }
}