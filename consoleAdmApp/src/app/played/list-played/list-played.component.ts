import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-list-played',
  templateUrl: './list-played.component.html',
  styleUrls: ['./list-played.component.css']
})
export class ListPlayedComponent implements OnInit {

  searchPlayed: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchPlayed = this.fb.group({
      descricao: this.fb.control(''),
      status: this.fb.control('')
    });
  }

}
