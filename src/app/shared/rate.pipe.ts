import { Pipe, PipeTransform } from "@angular/core";
import { ICourse } from "../models/icourse.model";

@Pipe({
  name: "rate"
})
export class RatePipe implements PipeTransform {
  transform(items: ICourse[], rate: Number): ICourse[] {
    if (!items) return [];
    if (!rate) return items;

    return items.filter(it => {
      return it.grade == rate;
    });
  }
}
