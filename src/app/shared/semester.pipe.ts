import { Pipe, PipeTransform } from "@angular/core";
import { ICourse } from "../models/icourse.model";

@Pipe({
  name: "semester"
})
export class SemesterPipe implements PipeTransform {
  transform(items: ICourse[], semester: Number): ICourse[] {
    if (!items) return [];
    if (!semester) return items;

    return items.filter(it => {
      return it.semester == semester;
    });
  }
}
