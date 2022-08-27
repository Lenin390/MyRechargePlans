import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  ApiUrl:string = 'https://www.plansinfo.com/_next/data/NUWnkm3bgCVva0_8o1RmC/'

  constructor(private httpreq: HttpClient) {}

  homepage():Observable<any>{
    let MenuUrl:string = this.ApiUrl + 'index.json';
    return this.httpreq.get('https://www.plansinfo.com/_next/data/NUWnkm3bgCVva0_8o1RmC/index');
  }
}
