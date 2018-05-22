import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)return null;
    if(!args)return value;

    return value.filter(function(text){
      let name = text.name.toLowerCase();
      let city = text.address.city.toLowerCase();
      return (name == args.toLowerCase()) || 
      (city == args.toLowerCase())
  });
    
    
  }

}
