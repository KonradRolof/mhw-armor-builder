import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sharpnessPxl"
})
export class SharpnessPxlPipe implements PipeTransform {

  transform(sharpness: number, base: number = 100): string {
    const pixel = (sharpness / 400) * base;
    return `${pixel}px`;
  }

}
