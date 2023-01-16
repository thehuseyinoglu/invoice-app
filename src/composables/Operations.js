import { ref,reactive } from "vue";

export default function(){
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
    }
    
    return{
        invoiceList,state,saveInvoice,editInvoice,deleteInvoice
    }
}



