import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html'
})

export class StarComponent {

    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}