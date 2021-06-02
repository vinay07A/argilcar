const carsList = document.querySelector('.cars');

const displayCars = (cars) =>{
    const newCars = cars.map((car)=>{
        const {Name,Gearbox_type,Capacity,Fuel_type,Category,Image,Rate} = car
        return `
            <div class='car-details'>
                <p>${Name}</p>
                <img src="${Image}" alt="${Name.toLowerCase()}"  height='200px'/>
                <span>$ ${Rate}/Day</span>
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
    }).join('')

    carsList.innerHTML = newCars;
}

export default displayCars;