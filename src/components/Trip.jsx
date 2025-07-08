import React from 'react'
import "./TripStyles.css"
import Tripdata from './Tripdata'
const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>Discover new destinations and experiences</p>
        <div className='tripcard'>
            <Tripdata
            img="https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG93cmFoJTIwYnJpZGdlfGVufDB8fDB8fHww"
            heading="Trip to Kolkata"
            text="Kolkata, the cultural capital of India, is a vibrant mix of colonial heritage, spiritual landmarks, and artistic flair. Start with the majestic Victoria Memorial, a white marble museum surrounded by lush gardens, and the historic Indian Museum, the oldest in India. The iconic Howrah Bridge stretches across the Hooghly River, while nearby Princep Ghat offers riverside views and peaceful strolls. For spiritual depth, visit the sacred Kalighat Temple and Dakshineswar Kali Temple, both significant pilgrimage spots. Explore Kumartuli, where skilled artisans craft beautiful idols for festivals. Ride a vintage tram through North Kolkata’s colonial lanes, and don’t miss Park Street—famous for its old-world charm, restaurants, and nightlife. Art lovers can explore Rabindra Sadan and the Academy of Fine Arts, while Science City and Eco Park offer modern-day fun for families and tourists alike.

"
            />
            <Tripdata
            img="https://images.unsplash.com/photo-1671711847762-b8308b444a42?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmplZWxpbmd8ZW58MHx8MHx8fDA%3D"
            heading="Trip to North Bengal"
            text="North Bengal is a treasure trove of natural beauty, cultural richness, and serene hill destinations. The iconic hill station Darjeeling is famous for its toy train (a UNESCO World Heritage site), sprawling tea gardens, Tiger Hill sunrise, and colonial-era charm. Nearby, Kurseong—known as the “Land of White Orchids”—offers misty hills and heritage tea estates like Makaibari. Kalimpong blends Tibetan culture and scenic beauty with tranquil monasteries, cactus nurseries, and panoramic views of the Eastern Himalayas.
            Descending to the foothills, the Dooars region welcomes you with lush greenery, endless tea gardens, and wildlife adventures in Gorumara, Jaldapara, and Buxa National Parks, where you can spot elephants, rhinos, bison, and exotic birds. North Bengal offers a perfect blend of hill serenity and jungle thrills—ideal for all kinds of travelers."
            />
            <Tripdata
            img="https://images.unsplash.com/photo-1689616489506-1c056f99e9ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHN1bmRhcmJhbnN8ZW58MHx8MHx8fDA%3D"
            heading="Trip to Sundarbans"
            text="The Sundarbans is filled with mysterious beauty and thrilling sights. One of the must-visit spots is the Sajnekhali Wildlife Sanctuary, known for its birdwatching, crocodile sightings, and a watchtower offering scenic views of the mangroves. Sudhanyakhali Watch Tower is the most popular for catching a glimpse of the elusive Royal Bengal Tiger, along with deer and wild boars. For a more immersive experience, Dobanki offers a unique elevated canopy walk through the dense forest. You can also visit the sacred Bonobibi Temple, dedicated to the guardian goddess of the forest, revered by both Hindus and Muslims. Another fascinating site is Netidhopani, home to mysterious temple ruins wrapped in local folklore. These places together showcase the wild charm and deep cultural roots of the Sundarbans."
            />

        </div>
    </div>
  )
}

export default Trip