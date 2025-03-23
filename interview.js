async function getproducts() {
    try {
        const response =await fetch("https://dummyjson.com/products?limit=10&skip=20");
        const  data =await response.json();
        console.log(data);

        const filterproducts =data.products.filter(
            (products)=>products.id>=21 &&products.id <=30
               );
               console.log(filterproducts);
    } catch (error) {
        console.error(error);
        
    }
    
}
getproducts();