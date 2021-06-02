const paginate = (cars) => {
    const itemsPerPage = 6
    const numberOfPages = Math.ceil(cars.length / itemsPerPage)
    const newcars = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return cars.slice(start, start + itemsPerPage)
    })
    return newcars
  }
  
  export default paginate