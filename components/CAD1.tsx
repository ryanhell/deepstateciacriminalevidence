import Image from 'next/image'

export default function CAD1() {
    return (
        <>
            <div className='box'>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-4 bg-blue-20 image-container">
                        <Image
                            src="/CADFiles/intialDuressCallto911/24C06391 _page1.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-4 bg-green-200 image-container">
                        <Image
                            src="/CADFiles/intialDuressCallto911/RyanHell391_page2.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="Picture of the author" />
                    </div>
                </div>
            </div>
        </>
    )
}