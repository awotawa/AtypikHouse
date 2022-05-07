import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/_services/public.service';

@Component({
	selector: 'app-lodging',
	templateUrl: './lodging.component.html',
	styleUrls: ['./lodging.component.scss']
})
export class LodgingComponent implements OnInit {

	content?: string;

	constructor(private publicService: PublicService) { }

	ngOnInit(): void {

		this.publicService.getPublicContent().subscribe({
			next: data => {
			  this.content = data;
			},
			error: err => {
			  this.content = JSON.parse(err.error).message;
			}
		  });
	}

}
