import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-reserve-filter',
	templateUrl: './reserve-filter.component.html',
	styleUrls: ['./reserve-filter.component.scss']
})
export class ReserveFilterComponent implements OnInit {

	reserveForm: FormGroup

	constructor(private formBuilder: FormBuilder,) {
		
		this.reserveForm = this.formBuilder.group(
			{
				dateDepart: ['', [Validators.required]],
				dateArrivee: ['', [Validators.required]],
				nbAdulte: [0, [Validators.required]],
				nbEnfant: [0, [Validators.required]],
			}
		)
	}

	ngOnInit(): void {
	}

	onSubmit() {
		
		console.log(this.reserveForm.value);

		// this.authService.register(this.reserveForm.value)
		// .subscribe(res => {
			
		// 	if (res.firstName) {
		// 		console.log("gg");
		// 	}
			
		// })
		
		//this.router.navigate(['/']);
	}

}
