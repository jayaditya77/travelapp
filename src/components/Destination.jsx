import React from 'react'
import './Destinationstyles.css'
import DestinationData from './DestinationData'
const Destination = () => {
  return (
    <>
    <div className='destination'>
        <h1>Popular Desitination</h1>
        <p>Tour gives you opportunities to explore new places</p>

        <DestinationData
        className="first-des"
        heading="Kolkata"
        text="A melting pot of colonial charm and modern chaos, Kolkata is the cultural heart of Bengal. From hand-pulled rickshaws in North Kolkata to posh cafes in South City, the city blends tradition and progress seamlessly.
        Must-see: Victoria Memorial, Indian Museum, Howrah Bridge, Dakshineswar Temple, Kumartuli (idol-making hub), and tram rides."
        img1="https://images.unsplash.com/photo-1630494378404-097499a0fea1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGtvbGthdGF8ZW58MHx8MHx8fDA%3D"
        img2="https://images.unsplash.com/photo-1675787126269-cacf91e22a34?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtvbGthdGF8ZW58MHx8MHx8fDA%3D"
        />
        <DestinationData
        className="first-des-reverse"
        heading="Darjeeling"
        text="Perched at an altitude of over 6,700 feet in the Lesser Himalayas, Darjeeling is one of India's most enchanting hill stations. Famous for its world-renowned tea, stunning vistas of snow-capped peaks, and colonial-era charm, this picturesque town offers a perfect escape from the hustle of city life.

        The highlight of any visit is the breathtaking view of Mt. Kanchenjunga, the third-highest mountain in the world, best seen at sunrise from Tiger Hill. Darjeeling is also home to the UNESCO World Heritage-listed Darjeeling Himalayan Railway, lovingly known as the “Toy Train,” which winds through lush hills and quaint villages."
        img1="https://images.unsplash.com/photo-1617478993559-75ceef413f4a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1646772809232-d2b6300c1688?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRhcmplZWxpbmd8ZW58MHx8MHx8fDA%3D"
        />
        <DestinationData
        className="first-des"
        heading="Sundarbans National Park"
        text="The Sundarbans, a UNESCO World Heritage Site, is the largest mangrove forest in the world, spread across the southern delta of West Bengal and Bangladesh. It’s a mystical land where land and water meet, home to an extraordinary variety of flora and fauna — most famously, the elusive Royal Bengal Tiger.

        Crisscrossed by a vast network of tidal rivers, creeks, and mudflats, the Sundarbans is not just a forest but a living, breathing ecosystem teeming with biodiversity. The forest is also home to saltwater crocodiles, spotted deer, wild boars, otters, and countless species of birds and aquatic life."
        img1="https://plus.unsplash.com/premium_photo-1719922590335-c90c33ab7511?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1697401517543-0f453a29709d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <DestinationData
        className="first-des-reverse"
        heading="Dooars"
        text="Stretching across the foothills of the Eastern Himalayas in North Bengal, the Dooars region is a paradise of lush forests, meandering rivers, tea gardens, and rich wildlife. The word “Dooars” comes from “doors,” as it serves as the gateway to Bhutan through its many mountain passes.

        Dooars is known for its breathtaking natural beauty and serene landscapes, making it a perfect retreat for nature lovers and wildlife enthusiasts. The area is home to several famous wildlife sanctuaries and national parks like Gorumara National Park, Jaldapara Wildlife Sanctuary, and Buxa Tiger Reserve, where you can spot elephants, rhinos, leopards, bison, and an amazing variety of birds."
        img1="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/26/d62b82909b1a162cf54ffab9734e1967_1000x1000.jpg"
        img2="https://images.unsplash.com/photo-1668007598566-5166fa2073a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <DestinationData
        className="first-des"
        heading="Digha"
        text="Located on the shores of the Bay of Bengal, Digha is one of the most popular beach destinations in West Bengal. Known for its long, shallow beaches and spectacular sunrises and sunsets, Digha has been a favorite getaway for families, couples, and weekend travelers for decades.

        The town offers a mix of Old Digha, with its rustic charm and rocky sea embankments, and New Digha, which is more developed and tourist-friendly with wide promenades, parks, and resorts. The beach is ideal for leisurely walks, pony rides, or just relaxing by the sea with coconut water in hand."
        img1="https://images.unsplash.com/photo-1632710334584-89714f84ba2c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaGF8ZW58MHx8MHx8fDA%3D"
        img2="https://beaches-searcher.com/images/beaches/356401480/IN401480.jpg"
        />
    </div>
    </>
  )
}

export default Destination