import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  fromAccount;
  toAccount;
  Ammount 
  array:any[] = [];
  formdata: FormGroup= new FormGroup({
    fromAccount: new FormControl(),
    toAccount: new FormControl(),
    Ammount: new FormControl()
});

toggle = true;
status = 'Potvrdi'; 

status2='Blokiraj';
toggle2=true;
enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Potvrdi' : 'Ponisti';
}

blokiraj(){
    this.toggle2= !this.toggle2;
    this.status2 = this.toggle2 ? 'Blokiraj' : 'Blokiran';
}

  ngOnInit() {  } 
  onClickSubmit(data) {
    console.log(this.array);
    console.log(this.formdata);
      this.array.push(this.formdata.value);
    console.log(this.array);
  }
  }
