import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-mobileplans',
  templateUrl: './mobileplans.component.html',
  styleUrls: ['./mobileplans.component.scss']
})
export class MobileplansComponent implements OnInit {
  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
  mobilePlansData:any;
  operator:string = '';
  id:number = 0;
  
  constructor(private homeservice: HomeService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      
      this.id = params['id'];
      this.operator = (params['operator']);
    });
    this.homeservice.mobilePlans().subscribe((res)=>{
      this.mobilePlansData = res[this.id][this.operator];
      console.log(this.mobilePlansData);
      
    })
  }

}
