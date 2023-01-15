<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <AppSidebar :invoices="invoiceList" :editInvoice="editInvoice" :deleteInvoice="deleteInvoice" />
    <InvoiceContent :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice" />
  </div>
</template>
<script setup>
import AppSidebar from "./components/appSidebar.vue"
import InvoiceContent from "./components/InvoiceContent.vue"
import { ref,reactive } from "vue";

const invoiceList = ref([]);

const state = reactive({
  activeInvoice:null
})

const saveInvoice = (invoice) => {
 
  invoiceList.value.push(invoice)
}

const editInvoice = (invoice)=>{
state.activeInvoice = invoice
}
const deleteInvoice = (invoice) =>{
  invoiceList.value = invoiceList.value.filter(i => i.id != invoice.id)
  console.log(invoceList);
}
</script>