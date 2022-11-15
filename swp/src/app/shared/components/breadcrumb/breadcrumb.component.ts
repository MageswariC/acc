import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/component/breadcrumb.service';
import { FormService } from '../../service/component/form.service';

@Component({
  selector: 'app-breadcrumb-component',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  braedcrumb: any;

  constructor(private readonly breadcrumbService: BreadcrumbService, private formService: FormService) {
  }

  ngOnInit(): void {
    let initialRoutes:any = [];
   this.breadcrumbService.breadcrumbs$.forEach((breadcrumbs: any) => {
    if(breadcrumbs.length){
    this.braedcrumb = breadcrumbs.forEach((ele:any)=>{
      ele.label.forEach((val:any)=>{
        initialRoutes.push({url:ele.url, label:val})
      })
    })
    this.braedcrumb = initialRoutes;
    initialRoutes = [];
  }
    // console.log("this.braedcrumb", this.braedcrumb);
      // if(breadcrumbs.length){
      //   const bc = breadcrumbs[breadcrumbs.length-1];
      //   const label = bc['label']
      //   if (label.length) {
      //     const obj = { ...bc, label }
      //     this.braedcrumb = obj;
      //     console.log(">>>>>", this.braedcrumb);

      //   }
      // }
    })
    // this.formService.backBtnClicked.next('modify');
  }
  
}
