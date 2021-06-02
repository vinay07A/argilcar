const carsList = document.querySelector('.cars');

const displayCars = (cars) =>{
    const newCars = cars.length ? cars.map((car)=>{
        const {Name,Gearbox_type,Capacity,Fuel_type,Category,Image,Rate} = car
        return `
            <div class='car-details'>
                <p class='car-title'>${Name.toUpperCase()}</p>
                <img class='car-img' src="${Image}" alt="${Name.toLowerCase()}" width='400px'  height='200px'>
                    <span class='car-rate'>$ ${Rate}/Day</span>
                </img>
                <div class='car-feature'>
                    <b>Sports </b>
                    <b>|</b>
                    <b>Auto</b>
                    <b>|</b>
                    <b>2 Passengers</b>
                    <b>|</b>
                    <b>Gasoline</b>
                </div>
            </div>
        `
    }).join('') : `<div class='no-cars'>No Cars Available</div>`

    carsList.innerHTML = newCars;
}

export default displayCars;