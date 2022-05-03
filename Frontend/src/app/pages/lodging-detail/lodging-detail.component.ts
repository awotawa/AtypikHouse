import { Component, OnInit, OnChanges } from '@angular/core';
import { PhotoServiceService } from 'src/app/shared/services/photo-service.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-lodging-detail',
    templateUrl: './lodging-detail.component.html',
    styleUrls: ['./lodging-detail.component.scss']
})
export class LodgingDetailComponent implements OnInit {
    title ='Chalêt Albert | Atypik House | Location de logement | France';

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

    constructor(private photoService: PhotoServiceService, private metaService:Meta, private titleService: Title) {
        //this.visibleImages = this.photoService.getImages()
        this.addTag();
        this.titleService.setTitle(this.title);
    }

    addTag() {
        this.metaService.addTag({ httpEquiv: 'Content-Type', content: 'text/html' }); // Indique aux agents et serveurs de prendre le contenu de cette page en tant que HTML
        this.metaService.addTag({ name: 'description', content: "Conditions générales d'utilisation d'Atypik House, site de location de logement insolite en France" }); // Meta description de la page
        this.metaService.addTag({ property: 'og-type', content: "Site web"}); /* Indique le type de l'objet
        /*this.metaService.addTag({ name: 'robots', content: 'index,follow' }); */ // Permet au robot d'indexer la page
        /* this.metaService.addTag({ property: 'og:title', content: 'Content Title for social media' }); */ // Titre pour réseau social
        /*this.metaService.addTag({ name: 'keywords', content: 'TypeScript, Angular' });*/ //Add keyword
        /* this.metaService.addTag({ property: 'og:title', content: "My Text" }) */ // Titre pour l'encadré dans les recherches
      }
    

    ngOnInit() {
        this.photoService.getImages().then((images: any[]) => {this.images = images});
    }

}
