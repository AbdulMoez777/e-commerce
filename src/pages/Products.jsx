import React from 'react'
import { useEffect } from 'react'
import { getData } from '../context/DataContext'
import FilterSection from '../components/FilterSection'
import LoadingWeb from '../assets/LoadingWeb.mp4'

function Products() {
  const { data, fetchAllProducts } = getData()


  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        {
          data?.length > 0 ? (
            <div className='flex gap-8 '>
              <FilterSection/>
              <div>
                {

                }
              </div>
            </div>
          ) : (
            <div className='flex items-center justify-center h-[400px]'>
              <video muted autoPlay loop className='w-[400px]'>
               <source  src={LoadingWeb} type='video/webm'/>
              </video>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products