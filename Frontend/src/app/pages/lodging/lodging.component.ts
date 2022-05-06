import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
	selector: 'app-lodging',
	templateUrl: './lodging.component.html',
	styleUrls: ['./lodging.component.scss']
})
export class LodgingComponent implements OnInit {

	content?: string;

	constructor(private userService: UserService) { }

	ngOnInit(): void {

		this.userService.getPublicContent().subscribe(
			data => {
				this.content = data;
				console.log(data);
				
			},
			err => {
				this.content = JSON.parse(err.error).message;
			}
		);
	}

}
