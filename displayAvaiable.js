const carAvailable = document.querySelector('.car-available')
const displayAvailable = (cars) =>{
    const displayData = `<p>Available Offers ${cars.length}</p>`
    carAvailable.innerHTML = displayData;
}
export default displayAvailable;        