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
                    <b>${Category} </b>
                    <b>|</b>
                    <b>${Gearbox_type}</b>
                    <b>|</b>
                    <b>${Capacity} Passengers</b>
                    <b>|</b>
                    <b>${Fuel_type}</b>
                </div>
            </div>
        `
    }).join('') : `<div class='no-cars'>No Cars Available</div>`

    carsList.innerHTML = newCars;
}

export default displayCars;