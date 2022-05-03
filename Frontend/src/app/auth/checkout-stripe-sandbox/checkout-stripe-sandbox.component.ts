import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-stripe-sandbox',
  templateUrl: './checkout-stripe-sandbox.component.html',
  styleUrls: ['./checkout-stripe-sandbox.component.scss']
})
export class CheckoutStripeSandboxComponent implements OnInit {

  paymentHandler:any = null;

  constructor() { }

  ngOnInit() {
    this.invokeStripe();
  }
  
  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KvR5nHJOjSYgElUAXPWZaqt6uj9FPtroWlOpF0g1dLe51q3opn7gW2FqvOZtBAqEecz7u7by2rLtV8VwH1cwbOT00tgHnGhSS',
      locale: 'fr',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Stripe token generated!');
      }
    });
  
    paymentHandler.open({
      name: 'Paiement',
      description: 'Réservation de Châlet Albert',
      amount: amount * 100
    });
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KvR5nHJOjSYgElUAXPWZaqt6uj9FPtroWlOpF0g1dLe51q3opn7gW2FqvOZtBAqEecz7u7by2rLtV8VwH1cwbOT00tgHnGhSS',
          locale: 'fr',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Le paiement a été effectué avec succès');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }

}
