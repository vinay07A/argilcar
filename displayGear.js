
const displayGear = (gear_container,cars) =>{
    const GearDropdown = 
    `<select id='gear-type' class='gear-type'>
        <option value="">GearBox Type</option>
        <option value=auto>Auto</p>
        <option value=manual>Manual</p>
    </select>`

    gear_container.innerHTML = GearDropdown;
}

export default displayGear;