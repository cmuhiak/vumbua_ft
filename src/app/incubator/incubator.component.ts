import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-incubator',
  templateUrl: './incubator.component.html',
  styleUrls: ['./incubator.component.scss']
})
export class IncubatorComponent implements OnInit {

  constructor (private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
