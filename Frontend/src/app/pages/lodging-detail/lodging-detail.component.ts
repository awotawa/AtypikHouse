import { Component, OnInit, OnChanges } from '@angular/core';
import { PhotoServiceService } from 'src/app/shared/services/photo-service.service';

@Component({
    selector: 'app-lodging-detail',
    templateUrl: './lodging-detail.component.html',
    styleUrls: ['./lodging-detail.component.scss']
})
export class LodgingDetailComponent implements OnInit {

    images!: any[];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 3
        }
    ];

    constructor(private photoService: PhotoServiceService) {
        //this.visibleImages = this.photoService.getImages()
    }

    ngOnInit() {
        this.photoService.getImages().then((images: any[]) => {this.images = images});
    }

}
