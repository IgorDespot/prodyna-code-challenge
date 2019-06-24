import { Pipe, PipeTransform } from "@angular/core";
import { Post } from 'src/app/entities/post/post.model';

@Pipe({
    name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

    transform(values: Post[], typeQuery: string): Post[] {
        if (!typeQuery) {
            return values;
        }
        return values.filter(post =>
            post.title.toLowerCase().indexOf(typeQuery.toLowerCase()) > -1);
    }
}