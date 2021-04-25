window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Create a variable for the rides data
  let ride = json


  // Loop though all the available rides in ride data
  for (let i=0; i < ride.length; i++) {
    
    // Use conditional logic to display level of service
    let serviceLevel 
    if (ride[i].purpleRequested == true) {
      serviceLevel = `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober Purple</span>
      </h1>
      <div class="border-4 border-purple-500 p-4 my-4 text-left">
      `

    } else if (ride[i].numberOfPassengers > 3) {
      serviceLevel = `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober <span class = "text-3xl">XL</span></span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
      `
    } else {
      serviceLevel = `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober X</span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
      `
    }
    // Create a well-named variable for each data point in the Object
    let dropoffAddress = ride[i].dropoffLocation.address
    let dropoffCity = ride[i].dropoffLocation.city
    let dropoffState = ride[i].dropoffLocation.state
    let dropoffZip = ride[i].dropoffLocation.zip
    let numberOfPassengers = ride[i].numberOfPassengers
    let passengerFirstName = ride[i].passengerDetails.first
    let passengerLastName = ride[i].passengerDetails.last
    let passengerPhoneNumber = ride[i].passengerDetails.phoneNumber
    let pickupAddress = ride[i].pickupLocation.address
    let pickupCity = ride[i].pickupLocation.city
    let pickupState = ride[i].pickupLocation.state
    let pickupZip = ride[i].pickupLocation.zip

    
    // Create a variable to store each ride in memory
    let rideElement = ride[i]
    // Create a variable for the HTML element we're going to add to
    let rideList = document.querySelector(`.rides`)
    
    // Insert HTML into the products element using the data from each product
    rideList.insertAdjacentHTML(`beforeend`, `
    ${serviceLevel}
     <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerFirstName} ${passengerLastName}</h2>
          <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupAddress}</p>
          <p>${pickupCity}, ${pickupState} ${pickupZip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffAddress}</p>
          <p>${dropoffCity}, ${dropoffState} ${dropoffZip}</p>
        </div>
      </div>
    `
    )
  }
})