// Create our number formatter.
export const getcurrencyFormat = (value, lacation="es-CO") =>{
    if (isNaN(value)){
        value = 0;
    }

    const currencyFormatter = new Intl.NumberFormat(lacation, {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return  currencyFormatter.format(value);
}
