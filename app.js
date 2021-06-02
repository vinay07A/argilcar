import paginate from './paginate.js'
import displayCars from './displayCars.js';
import displaySort from './displaySort.js';
import displayPagination from './displayPagination.js';
import displayGear from './displayGear.js';
import displayFuel from './displayFuel.js';
import displayAvailable from './displayAvaiable.js';

//variables
const carFilter = document.querySelector(".filter_cars");
const carListHeader = document.querySelector(".carlist-header")
const carsDisplay = document.querySelector(".cars");
const pagination = document.querySelector(".pagination");
const sortCar = document.querySelector('.sort-car');
const gearDropDown = document.querySelector('.gearcontainer');
const fuelDropDown = document.querySelector('.fuel_type');
const applyFilter = document.querySelector('.applyfilter');
const carsAvailable = document.querySelector('.car-available');

let pages =[];
let index=0;
let filteredCars=[];
class Cars{
    async getCars(){
        const url = 'https://api.jsonbin.io/b/5ff7e18809f7c73f1b6f05e3/2';
        try {
            let result = await fetch(url,{
                method:'get',
                headers:{
                    'Content-Type': 'application/json',
                    'secret-key':'$2b$10$XnRQ8lXD0phXmFoYQp5.VOBeiO3TmKBs8hfmZ2Uw04Ju3rpP/Bi6i'
                }
            });
            let data = await result.json();
            let carslist = data;
            pages = paginate(carslist);
            return pages;
          } catch (error) {
            console.log(err);
          }
    }
}

const setupUI = () => {
    console.log(pages[index]);
    displayCars(pages[index]);
    displaySort(pages[index]);
    displayPagination(pagination,pages,index);
    displayGear(gearDropDown,pages[index]);
    displayFuel(fuelDropDown,pages[index]);
    displayAvailable(pages[index])
}


pagination.addEventListener('click',function(e){
    if (e.target.classList.contains('pagination')) return
    if (e.target.classList.contains('page-btn')) {
        index = parseInt(e.target.dataset.index)
    }
    if (e.target.classList.contains('next-btn')) {
        index++
        if (index > pages.length - 1) {
            index=0;
        }
    }
    if (e.target.classList.contains('prev-btn')) {
        index--
        if (index < 0) {
            index=pages.length-1;
        }
    }
    setupUI();
});



sortCar.addEventListener('change',function(e){
    let latestCars = filteredCars.length ? 
        filteredCars.sort((a, b) => a[e.target.value] > b[e.target.value] ? 1 : -1) 
        : 
        pages[index].sort((a, b) => a[e.target.value] > b[e.target.value] ? 1 : -1)
    displayCars(latestCars)
})


applyFilter.addEventListener('click',function(){
    let gearType = document.getElementById("gear-type").value;
    let fuelType = document.getElementById("fuel-type").value;
    console.log(gearType,fuelType)
    const filters ={}
    if(gearType != '') filters.Gearbox_type = gearType
    if(fuelType != '') filters.Fuel_type = fuelType
    filteredCars = pages[index].filter(cars => {
        for (var key in filters) {
            if (cars[key] === undefined || cars[key] != filters[key])
              return false;
        }
        return true;
        
    })
    displayCars(filteredCars)
    displayAvailable(filteredCars);
})

document.addEventListener("DOMContentLoaded", () => {
    const cars = new Cars();
    cars.getCars().then(cars => setupUI())
});