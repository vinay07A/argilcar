function paginate(cars){
    const itemsPerPage = 6
    const numberOfPages = Math.ceil(cars.length / itemsPerPage);
    let newData = getCarsNew(cars,itemsPerPage,numberOfPages).then((data)=>{return data})
    return newData;
  }

  function getCarsNew(cars,itemsPerPage,numberOfPages){
    let pagesPerArray=[];
    return new Promise((resolve,reject)=>{
      for(let index=0;index < numberOfPages;index++){
        const start = index * itemsPerPage
        pagesPerArray.push(cars.slice(start, start + itemsPerPage))
      }
      resolve(pagesPerArray);
    })
  }


  
  export default paginate