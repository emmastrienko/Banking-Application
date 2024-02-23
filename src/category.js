var category = function category(key) {
  
  switch(key) {
    case "pl":
      return "Personal Loan";
      break;
    case "Vl":
      return "Vehicle Loan";
      break;
    case "EL":
      return "Education Loan";
      break;
    case "hL":
      return "Home Loan";
      break;
  }
  
};
  
  module.exports = {
    category: category
  };

