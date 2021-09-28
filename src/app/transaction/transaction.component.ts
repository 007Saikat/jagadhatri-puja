import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../model/transaction';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction: Transaction = new Transaction;
  myDate = new Date();
  netClosingDisabled: boolean = true;
  givenAmountDisabled: boolean = false;
  receiveAmountDisabled: boolean = false;
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    this.transaction.purpose="";
    this.transaction.mode="";
    this.transaction.givenAmount=0;
    this.transaction.receivedAmount=0;
    this.transaction.netClosingAmount=0;
    this.transaction.type="";
    this.transaction.givenBy="";
    this.transaction.takenBy="";
    this.transaction.category="";
    this.transaction.createdDate=this.myDate.toLocaleDateString();
    console.log(this.transaction);
  }
  home(){
      this.router.navigate(['/home']);
  }
  selectMode(){
    if(this.transaction.mode == "bill"){
    this.netClosingDisabled = false;
    this.givenAmountDisabled = true;
    this.receiveAmountDisabled = true;
    this.transaction.type = "both";
  }
  this.netClosingDisabled = true;
  this.givenAmountDisabled = false;
  this.receiveAmountDisabled = false;
  }
  onGivenAmountChange(amount:number){
    if(this.transaction.givenAmount && this.transaction.receivedAmount){
      this.transaction.netClosingAmount = this.transaction.givenAmount - this.transaction.receivedAmount;
    }
  }
  onReceivedAmountChange(amount:number){
    if(this.transaction.givenAmount && this.transaction.receivedAmount){
      this.transaction.netClosingAmount = this.transaction.givenAmount - this.transaction.receivedAmount;
    }
  }
  onGivenByChange(name:string){
    if (this.transaction.mode == "bill"){
    this.transaction.takenBy = this.transaction.givenBy;}
  }
  onTakenByChange(name:string){
    if (this.transaction.mode == "bill"){
    this.transaction.givenBy = this.transaction.takenBy;}
  }
}
