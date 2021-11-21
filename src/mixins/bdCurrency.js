export default{
    methods: {
        bdCurrency(currency){
          var taka = new Intl.NumberFormat('bn-BD',{ style: 'currency', currency: 'BDT' } ).format(currency)
        //   console.log('BD CURRENCY',b);
          return taka
        }
      },
}