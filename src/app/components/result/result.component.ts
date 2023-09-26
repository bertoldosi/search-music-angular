import { Component, EventEmitter, Output } from '@angular/core';
import { HomeSharedService } from 'src/app/pages/home/home.shared.service';

interface Artists {
  name: string;
  url: string;
  image: {
    url: string;
  };
}
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  artists: Artists[];
  imageDefaultUrl: string;
  @Output() clearResult = new EventEmitter<void>();

  constructor(private homeSharedService: HomeSharedService) {
    this.imageDefaultUrl = '../../../assets/image-example.png';
    this.artists = [];

    this.homeSharedService.result$.subscribe((response) => {
      const artistFormatted = response?.map((artistMap) => {
        return {
          name: artistMap.name,
          url: artistMap.url,
          image: {
            url: artistMap.image[1]['#text'],
          },
        };
      });
      this.artists = artistFormatted;
    });
  }

  clearResultClick() {
    this.clearResult.emit();
  }
}
