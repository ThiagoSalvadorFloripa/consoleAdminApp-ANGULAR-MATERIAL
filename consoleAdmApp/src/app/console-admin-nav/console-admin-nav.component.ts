import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-console-admin-nav',
  templateUrl: './console-admin-nav.component.html',
  styleUrls: ['./console-admin-nav.component.css']
})
export class ConsoleAdminNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public translate: TranslateService) {

    translate.addLangs(['en', 'pt-br','es']);  
    if (localStorage.getItem('locale')) {  
      const browserLang = localStorage.getItem('locale');  
      translate.use(browserLang.match(/en|pt-br|es/) ? browserLang : 'en');  
    } else {  
      localStorage.setItem('locale', 'en');  
      translate.setDefaultLang('en');  
    }  

  }

  ngOnInit() {
  
  }

  changeLang(language: string) {  
    localStorage.setItem('locale', language);  
    this.translate.use(language);  
  }  



}
