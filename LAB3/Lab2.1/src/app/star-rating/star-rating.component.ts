import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <div class="star-rating">
      <span [class.checked]="star === 'full-star'" [class.half-star]="star === 'half-star'">
        <i class="fas fa-star"></i>
      </span>
    </div>
  `,
  styles: [`
    .star-rating {
      font-size: 1.2rem;
    }

    .fa {
      color: #999;
    }

    .checked {
      color: gold;
    }

    .half-star::before {
      content: '\f089';
      color: gold;
    }
  `]
})
export class StarRatingComponent {
  @Input() rating: number = 0;

  get star(): string {
    const fullStars = Math.floor(this.rating);
    const halfStar = this.rating - fullStars >= 0.5;

    if (fullStars > 0) {
      return halfStar ? 'half-star' : 'full-star';
    } else {
      return 'empty-star';
    }
  }
}
