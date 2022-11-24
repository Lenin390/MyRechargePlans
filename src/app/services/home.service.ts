import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
// import { index } from '../json/index.json'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // ApiUrl:string = 'https://www.plansinfo.com/_next/data/NUWnkm3bgCVva0_8o1RmC/'
  ApiUrl:string = 'http://localhost:3000/'

  constructor(private httpreq: HttpClient) {}

  homepage():Observable<any>{
    let MenuUrl:string = this.ApiUrl + 'pageProps';
    // return this.httpreq.get('https://www.plansinfo.com/_next/data/NUWnkm3bgCVva0_8o1RmC/index.json');
    return this.httpreq.get(MenuUrl);
  }

  mobilePlans():Observable<any>{
    let MenuUrl:string = this.ApiUrl + 'mobilePlans';
    // return this.httpreq.get('https://www.plansinfo.com/_next/data/NUWnkm3bgCVva0_8o1RmC/index.json');
    return this.httpreq.get(MenuUrl);
  }
}
