const sortCar = document.querySelector('.sort-car')
const displaySort = (cars) =>{
    const actinSort = `<select class='sortcar'>
                        <option value="">Relevant</option>
                        <option value=Horsepower>Horse Power</p>
                        <option value=Year>Make Year</p>
                    </select>`
    sortCar.innerHTML = actinSort;
}

export default displaySort;