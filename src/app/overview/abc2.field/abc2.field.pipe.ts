import {Pipe, PipeTransform} from '@angular/core';

// We use the @Pipe decorator to register the name of the pipe
@Pipe({
  name: 'fieldConvert'
})
// The work of the pipe is handled in the tranform method with our pipe's class
export class FieldConvertPipe implements PipeTransform {
  transform(entry: Object, field: string) {


    //console.log('entry:' + JSON.stringify(entry));
    //console.log('field: ' + field);


    let fieldValue = entry[field];
    // console.log('fieldValue:' + fieldValue);

    return fieldValue;
  }
}
