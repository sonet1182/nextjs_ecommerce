import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <div className='grid grid-flow-row-dense md:geid-col-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
        {products.slice(0, 4) 
        .map((product) => (
            <Product product={product}/>
        ))}

        <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt=""/>

        <div className='md:col-span-2'>
        {products.slice(4, 5) 
        .map((product) => (
            <Product product={product}/>
        ))}
        </div>

        {products.slice(5, products.length) 
        .map((product) => (
            <Product product={product}/>
        ))}

    </div>
  )
}

export default ProductFeed