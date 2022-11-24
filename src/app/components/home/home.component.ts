import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catageory, Index, Operator, PageProps } from 'src/app/model/mrp-interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  HomepageData!: Operator[];
  mobilePlans: Operator[] = [];
  dthPlans: Operator[] = [];
  broadbandPlans: Operator[] = [];
  plansByCatageory!: catageory[];
  imgURL: string = "https://images.plansinfo.com/operator/"
  constructor(private homeservice: HomeService, public route:Router) { }

  ngOnInit(): void {
    this.homeservice.homepage().subscribe((res: PageProps) => {
      // console.log(res);
      this.HomepageData = res.operators;
      this.mobilePlans = this.HomepageData.filter(plans => plans.service === 'MOBILE');
      this.dthPlans = this.HomepageData.filter(plans => plans.service === 'DTH');
      this.broadbandPlans = this.HomepageData.filter(plans => plans.service === 'BROADBAND');
      this.plansByCatageory = [{
        name: this.mobilePlans,
        label: 'Mobile Prepaid Plans'
      },
      {
        name: this.dthPlans,
        label: 'Dth Plans'
      },
      {
        name: this.broadbandPlans,
        label: 'Broadband Plans'
      },];
    });
  }

}
