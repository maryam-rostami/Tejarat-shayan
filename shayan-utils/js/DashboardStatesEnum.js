import React from "react"

export const DashboardStatesEnum = {
  INVOICE_DRAFTED: 'Drafted',
  INVOICE_SENT: 'InvoiceSent',
  INVOICE_SENT_ACCEPTED: 'InvoiceApproved',

  SETTLED_PASSED: 'SettledPassed',
  NOT_SETTLED_PASSED: 'NotSettledPassed',
  SETTLED_PARTLY_PASSED: 'SettledPartlyPassed',
  TOTAL_CLAIM_PASSED: 'TotalClaimPassed',

  SETTLED_CURRENT: 'SettledCurrent',
  NOT_SETTLED_CURRENT: 'NotSettledCurrent',
  SETTLED_PARTLY_CURRENT: 'SettledPartlyCurrent',
  TOTAL_CLAIM_CURRENT: 'TotalClaimCurrent',

  SETTLED: 'Settled',
  SETTLED_PARTLY: 'SettledPartly',
  NOT_SETTLED: 'NotSettled',
  FOUNDED: 'Founded',

  TOTAL_SAILS: 'TotalSails',
  TOTAL_RECEIVED: 'TotalReceived',

  NOT_ACCEPTED_EINVOICE: 'NotAcceptedReceivedInvoice',
  RECEIVED_EINVOICE: 'ReceivedEinvoice' , 
  TOTAL_CLAIM : 'TotalClaim'

}