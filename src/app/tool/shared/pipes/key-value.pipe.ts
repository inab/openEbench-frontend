import { Pipe, PipeTransform } from "@angular/core";

/**
 * pipe function for Key Value
 */
@Pipe({
    name: "keyValue",
})

/**
 * Class KeyValue Pipe
 */
export class KeyValuePipe implements PipeTransform {
    transform(dict: Object) {
        const res = [];
        for (const key in dict) {
            if (dict.hasOwnProperty(key)) {
                res.push({ key: key, value: dict[key].replace("@", " (at) ") });
            }
        }
        return res;
    }
}
