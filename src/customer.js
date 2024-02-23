var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{

  const isDuplicate = customerList.some(customer => customer[0] === CustomerId);

  if(!isDuplicate) {
    const newCustomer = [
       CustomerId,
       CustomerName,
       CustomerAge,
       CustomerAddress,
       CustomerContactNumber,
       Category
    ];

    customerList.push(newCustomer);
  }
}

const updateCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
  const existingCustomerIndex = customerList.findIndex(customer => customer[0] === CustomerId);

  if (existingCustomerIndex !== -1) {
    customerList[existingCustomerIndex] = [
      CustomerId,
      CustomerName,
      CustomerAge,
      CustomerAddress,
      CustomerContactNumber,
      Category
    ]
  }

};


const getAllCustomers=()=>{
  return customerList;
}


module.exports={addCustomer,updateCustomer,getAllCustomers}