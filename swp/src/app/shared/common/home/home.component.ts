import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import {tilesList } from '../../modal/components/dashbaordTiles'
import {FormService} from '../../service/component/form.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  passDataToHome = "SWP Application";

  tilesLists : Array<any> = tilesList

  constructor(private router:Router, private ser: AuthService, private FormService: FormService) { }

  ngOnInit(): void {
    this.FormService.storeHomeData = this.passDataToHome;
  }

  navigateToComponent(route: any) {
        this.router.navigateByUrl(route)
  }
}
