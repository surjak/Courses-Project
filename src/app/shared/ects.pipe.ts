import { Pipe, PipeTransform } from "@angular/core";
import { ICourse } from "../models/icourse.model";

@Pipe({
  name: "ects"
})
export class EctsPipe implements PipeTransform {
  transform(items: ICourse[], ects: Number): ICourse[] {
    if (!items) return [];
    if (!ects) return items;

    return items.filter(it => {
      return it.ects >= ects;
    });
  }
}
