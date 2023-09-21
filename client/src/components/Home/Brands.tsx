import Image from "next/image"

export const Brands = () => {
    return(
        <div className="brands-area flex items-center justify-between">
        {/* Brand Logo */}
        <div className="single-brands-logo">
            <Image
                src='/assets/images/brands/brand1.png'
                alt='Brand Logo'
                width={80}
                height={80}
                className='single-brands-logo'
            />
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
            <Image
                src='/assets/images/brands/brand2.png'
                alt='Brand Logo'
                width={80}
                height={80}
                className='single-brands-logo'
            />
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
            <Image
                src='/assets/images/brands/brand3.png'
                alt='Brand Logo'
                width={80}
                height={80}
                className='single-brands-logo'
            />
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
            <Image
                src='/assets/images/brands/brand4.png'
                alt='Brand Logo'
                width={80}
                height={80}
                className='single-brands-logo'
            />
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
            <Image
                src='/assets/images/brands/brand5.png'
                alt='Brand Logo'
                width={80}
                height={80}
                className='single-brands-logo'
            />
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
            <Image
                src='/assets/images/brands/brand6.png'
                alt='Brand Logo'
                width={80}
                height={80}
                className='single-brands-logo'
            />
        </div>
    </div>
    )
}