import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

    transform(data: any[],nameSearch:any,companySearch:any,designationSearch:any): any {
      if(!data){
        return null;
      }
      if(nameSearch != ''){
        let search = nameSearch.trim().toLowerCase()
        console.log(nameSearch);
          return data.filter((item)=>{
            let ele = item.name.trim().toLowerCase()
            if(ele.includes(search) ){
                return item
            }
          })
      }
      if(companySearch != ''){
        let search = companySearch.trim().toLowerCase()
          return data.filter((item)=>{
            let ele = item.company.name.trim().toLowerCase()
            if(ele.includes(search) ){
                return item
            }
          })
      }
      if(designationSearch != ''){
        let search = designationSearch.trim().toLowerCase()
          return data.filter((item)=>{
            let ele = item.company.designation.trim().toLowerCase()
            if(ele.includes(search) ){
                return item
            }
          })
      }
      else{
        return data
      }
    }

}
