
const displayFuel = (fuel_container,cars) =>{
    const FuelDropDown = 
    `<select id='fuel-type' class='fuel-type'>
        <option value="">Fuel Type</option>
        <option value=Petrol>Petrol</p>
        <option value=Diesel>Diesel</p>
        <option value=Hybrid>Hybrid</p>
    </select>`

    fuel_container.innerHTML = FuelDropDown;
}

export default displayFuel;