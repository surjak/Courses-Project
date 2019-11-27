import { Pipe, PipeTransform } from "@angular/core";
import { ICourse } from "../models/icourse.model";
@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: ICourse[], searchText: string): ICourse[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
