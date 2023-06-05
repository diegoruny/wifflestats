import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imagenPrueba from 'public/next.svg'





const Footer = () => {
    const sponsors = [
        {
            name: 'Haynies Corner Arts District',
            link: 'https://hayniescorner.com',
            image: 'thirteen.svg'
        },
        {
            name: 'Craddock Finishing',
            link: 'https://hayniescorner.com',
            image: 'vercel.svg'
        },
    
    ]
    // in the <li> element the 
  return (
    <section className='container border-t p-3'>
        <ul className='flex gap-2 flex-wrap justify-center'>
        {sponsors.map((sponsor, index) => (
        <li className='rounded-md border'> 
            <Link key={index} href={sponsor.link} className='grid justify-center'>
                <Image src={`/${sponsor.image}`} alt={`${sponsor.name} Logo`} width={100} height={100} className='top-0 left-0'/>
                <span>{sponsor.name}</span>      
            </Link>
        </li>)
        )}           
        </ul>
    </section>
  )
}

export default Footer