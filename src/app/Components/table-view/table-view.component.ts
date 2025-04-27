import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SearchPipe } from '../../Directives/Pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SearchPipe,
    ReactiveFormsModule
  ],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss'
})
export class TableViewComponent {
  apiUrl = "https://zil-test.s3.us-east-1.amazonaws.com/json-data.json"
  tableData : any[] = []
  nameSearch : any = '';
  companySearch = '';
  designationSearch = ''
  constructor(private http:HttpClient){

  }

  ngOnInit(){
      this.getData();
  }

  getData(){
    this.http.get(this.apiUrl).subscribe((data:any)=>{
          this.tableData = data
          console.log(data);
    })
  }
}
