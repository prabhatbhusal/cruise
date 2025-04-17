import React from 'react'
import Cards from '@/components/ui/Cards'

const cruiseData = [
  {
    id:1,
    title:"This is title",
    category: "Category",
    price: 1345,
    duration: "2 April - 4 May",
    images: ["/images/image1.jpg", "/images/image2.jpg"],
  },
  {
    id:2,
    title:"This is title",
    category: "Category",
    price: 1345,
    duration: "2 April - 4 May",
    images: ["/images/image1.jpg", "/images/image2.jpg"],
  }
]

const page = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {
        cruiseData.map((cruise) => (

          <Cards key={cruise.id} cruise={cruise} />
        ))
      }
    </div>
  )
}

export default page
