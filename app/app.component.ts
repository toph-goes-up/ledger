import { Component, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'ledger-app',
  template: `<section class='container'>
       <aside class='payeepic'>
        <img src='./img/nerd.svg'>
       </aside>
       <article class='bill'>
         <h1>Internet</h1>
         <div class='billmid'>
           <span class='amount'>$80.80</span>
           to
           <span class='payee'>Ryan</span>
         </div>
         <table class='dates'>
           <tr>
             <td>open:</td><td>due:</td>
           </tr>
           <tr>
             <td>10/10/1010</td><td>20/20/2020</td>
           </tr>
         </table>
       </article>
       <ul class='paytiles'>
         <li class="paytile"><img src='img/faceicon.png'></li>
         <li class="paytile"><img src='img/elmomouth.svg'></li>
         <li class="paytile"><img src='img/koala.svg'></li>
       </ul>
     </section>`
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit() {
      $( document ).ready(function() {
        console.log('App is loaded');
        $('body').trigger('App-Loaded');
      });
    }
}
