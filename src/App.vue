<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <AppSidebar :invoices="invoiceList" :editInvoice="editInvoice" :deleteInvoice="deleteInvoice" />
    <InvoiceContent :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice" />
  </div>
</template>
<script setup>
import AppSidebar from "./components/appSidebar.vue"
import InvoiceContent from "./components/InvoiceContent.vue"
import Operations from "./composables/Operations.js"

const { invoiceList,state,saveInvoice,editInvoice,deleteInvoice} = Operations();
</script>