import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ProductCatCard from "../Home/ProductCatCard";
import "animate.css";

export const CollectionPage = () => {
    return(
        <>
            <Box maxWidth="xl" className="mb-5 mx-auto">
                <Box className="collection mx-auto">
                    <Box className="abt-desc">
                        <Typography variant="h6" className="font-extrabold text-goldie">S R LUXURIES</Typography>
                        <Typography variant="h2" className="text-5xl font-extrabold mb-2 text-white w-2/3 mb-4 mt-0">Collection</Typography>
                        </Box> 
                    </Box>
                </Box>
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/tees">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/tees" className="animate__animated animate__flash animate__delay-10s"> SRL Tees</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-1b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-2b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-3b.jpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-4.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-4b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-5.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-5b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-6.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-6b.jpg"
                />
            </Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="trad-wears">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/trad-wears" className="animate__animated animate__flash animate__delay-7s"> Casual Shirts</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casual/cs-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casual/cs-1b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casualbrocade/cs-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casualbrocade/cs-1b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casual/cs-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casual/cs-2b.jpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casualbrocade/cs-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casualbrocade/cs-2b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casual/cs-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casual/cs-3b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casualbrocade/cs-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casualbrocade/cs-3b.jpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casual/cs-4.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casual/cs-4b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casualbrocade/cs-4.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casualbrocade/cs-4b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casualbrocade/cs-5.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casualbrocade/cs-5b.jpg"
                />
            </Box>

            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="trad-wears">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/trad-wears" className="animate__animated animate__flash animate__delay-2s"> Trads</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-1b.jpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/agbada/a-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/agbada/a-1b.jpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-2b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-3b.jpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/agbada/a-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/agbada/a-2b.jpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-4.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-4b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-5.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-5b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-6.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-6b.jpg"
                />
            </Box>
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/corporate-wears">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/corporate-wears" className="animate__animated animate__flash animate__delay-5s"> Corporate</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-1b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-2b.jpg"
                />
            </Box>
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/summer-wears">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/summer-wears" className="animate__animated animate__flash animate__delay-10s">2-Catchy Piece</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-1b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-2b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-3bjpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-4.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-4.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-5.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-5b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-6.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-6b.jpg"
                />
            </Box>
        </>
    )
}