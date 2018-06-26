import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SingleTextField } from '../shared/singleTextField';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private singleTextField: SingleTextField;
  public search: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.singleTextField = {
      text: '',
    };
    this.initializeForm();
  }


  private initializeForm() {
    this.search = new FormGroup (this.singleTextField = {
      text: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  private goToToolsPage(term: string) {
    this.router.navigate(['/tool'], { queryParams: {search: term}, queryParamsHandling: '' });
  }

  public submitForm() {
    this.singleTextField = {
      text: this.search.value.text,
    };
    this.goToToolsPage(this.singleTextField.text);
  }

}
