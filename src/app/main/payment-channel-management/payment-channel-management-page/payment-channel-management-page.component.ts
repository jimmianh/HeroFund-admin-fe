import {Component} from '@angular/core';
import {cilPenAlt, cilSpreadsheet, cilTrash} from "@coreui/icons";
import {PaymentChannelService} from "../service/payment-channel.service";
import {take} from "rxjs";
import {PaymentChannel} from "../../../entity/PaymentChannel";
import {StringUtil} from "../../../util/StringUtil";

@Component({
  selector: 'app-payment-channel-management-page',
  templateUrl: './payment-channel-management-page.component.html',
  styleUrls: ['./payment-channel-management-page.component.scss']
})
export class PaymentChannelManagementPageComponent {
  icons = {cilSpreadsheet, cilPenAlt, cilTrash,};
  listPaymentChannel: PaymentChannel[] = [];
  stringUtil = StringUtil;

  constructor(private paymentChannelService: PaymentChannelService) {
  }

  ngOnInit(): void {
    this.paymentChannelService.getListPaymentChannel().pipe(take(1)).subscribe(res => {
      this.listPaymentChannel = res;
       this.listPaymentChannel.map(s => {
        s.secretId = this.stringUtil.handlerClientAndSecret(s.secretId)
        s.clientId = this.stringUtil.handlerClientAndSecret(s.clientId)
      })
    });
  }
}
