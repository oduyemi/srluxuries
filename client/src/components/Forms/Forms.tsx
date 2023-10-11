import { Box, Typography, Button, Card, Grid, Radio } from "@mui/material";
import Link from "next/link";

export const LoginForm = () => {
    return(
        <Box maxWidth="sm" sx={{ margin:"auto" }} className="my-10">
            <Card className="shadow appearance-none bg-transparent mx-auto">                    
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box maxWidth="sm" className="mx-auto login">
                        <Typography variant="h2"className="text-2xl text-ggreen font-light text-center" gutterBottom>Welcome Back!</Typography>
                        <Box maxWidth="sm" sx={{ display:"flex", flexDirection:"column" }} className="mb-3 gap-6">
                            <input className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="phone" required placeholder="Enter Phone Number"/>
                            <input className=" shadow appearance-none border rounded w-1/2 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="pwd" required value="" placeholder="Enter Password"/>
                        </Box>
                        <Box className="text-center">
                            <Box className="my-3 text-center">
                                <Link href="/custom-image">
                                    <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                        border border-goldie hover:border-tan">Login
                                    </Button>
                                </Link>
                            </Box>
                            <Box className="text-center my-3">
                                <span className="text-brownie ps-3 text-xs mr-3">Not Registered Yet? <Link className="text-goldie" href="/register">Click Here</Link></span>
                            </Box>
                        </Box>
                    </Box>
                </form>   
            </Card>
        </Box>      
    )
} 

export const Reg1 = () => {
    return(
        <Box maxWidth="sm" sx={{ margin:"auto" }} className="my-10">
            <Card className="shadow appearance-none bg-transparent mx-auto">                    
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box maxWidth="sm" className="mx-auto login">
                        <Typography variant="h2"className="text-2xl text-ggreen font-light text-center" gutterBottom>Join the SR Club</Typography>
                        <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>Please fill in your details</Typography>
                        <Box maxWidth="sm" sx={{ display:"flex", flexDirection:"column" }} className="mb-3 gap-6">
                            <input type="text" placeholder="Your Name" name="name" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Phone Number" name="phone" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="password" placeholder="Create Password" name="pwd" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="password" placeholder="Confirm Password" name="cpwd" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <textarea placeholder="Your Address" name="address" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                        </Box>
                        <Box className="text-center">
                            <Box className="my-3 text-center">
                                <Link href="/register2">
                                    <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                        border border-goldie hover:border-tan">Next
                                    </Button>
                                </Link>
                            </Box>
                            <Box className="text-center my-3">
                                <span className="text-brownie ps-3 text-xs mr-3">Already have an account? <Link className="text-goldie" href="/login">Click Here</Link></span>
                            </Box>
                        </Box>
                    </Box>
                </form>   
            </Card>
        </Box>      
    )
};

export const Reg2 = () => {
    return(
        <Box maxWidth="sm" sx={{ margin:"auto" }} className="my-10">
            <Card className="shadow appearance-none bg-transparent mx-auto">                    
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box maxWidth="sm" className="mx-auto login">
                        <Typography variant="h2"className="text-2xl text-ggreen font-light text-center" gutterBottom>Blazer and Kaftan</Typography>
                        <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>Please provide your measurement in inches</Typography>
                        <Box maxWidth="sm" sx={{ display:"flex", flexDirection:"column" }} className="mb-3 gap-6">
                            <input type="number" placeholder="Top Length" name="top-length" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Shoulder" name="shoulder" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Chest" name="chest" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Blazer Stomach" name="blazer-stomach" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Blazer Sleeve" name="blazer-sleeve" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Bicep" name="bicep" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </Box>
                        <Box className="text-center">
                            <Box className="my-3 text-center">
                                <Link href="/register3">
                                    <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                        border border-goldie hover:border-tan">Next
                                    </Button>
                                </Link>
                            </Box>
                            <Box className="text-center my-3">
                                <Link className="text-goldie" href="/register">Go Back</Link>
                            </Box>
                        </Box>
                    </Box>
                </form>   
            </Card>
        </Box>      
    )
};

export const Reg3 = () => {
    return(
        <Box maxWidth="sm" sx={{ margin:"auto" }} className="my-10">
            <Card className="shadow appearance-none bg-transparent mx-auto">                    
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box maxWidth="sm" className="mx-auto login">
                        <Typography variant="h2"className="text-2xl text-ggreen font-light text-center" gutterBottom>Trouser</Typography>
                        <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>Please provide your measurement in inches</Typography>
                        <Box maxWidth="sm" sx={{ display:"flex", flexDirection:"column" }} className="mb-3 gap-6">
                            <input type="number" placeholder="Trouser Length" name="trouser-length" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Waist" name="waist" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Hip" name="hip" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Stomach" name="trouser-stomach" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Leg" name="leg" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </Box>
                        <Box className="text-center">
                            <Box className="my-3 text-center">
                                <Link href="/register4">
                                    <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                        border border-goldie hover:border-tan">Next
                                    </Button>
                                </Link>
                            </Box>
                            <Box className="text-center my-3">
                                <Link className="text-goldie" href="/register2">Go Back</Link>
                            </Box>
                        </Box>
                    </Box>
                </form>   
            </Card>
        </Box>      
    )
};

export const Reg5 = () => {
    return(
        <Box maxWidth="sm" sx={{ margin:"auto" }} className="my-10">
            <Card className="shadow appearance-none bg-transparent mx-auto">                    
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box maxWidth="sm" className="mx-auto login">
                        <Typography variant="h2"className="text-2xl text-ggreen font-light text-center" gutterBottom>Suit</Typography>
                        <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>Please provide your measurement in inches</Typography>
                        <Box maxWidth="sm" sx={{ display:"flex", flexDirection:"column" }} className="mb-3 gap-6">
                            <input type="number" placeholder="Suit Length" name="suit-length" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Round Body" name="suit-body" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Sleeve" name="sleeve" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Back" name="back" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Round Sleeve" name="round-sleeve" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Trouser Length" name="trouser-length" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Trouser Waist" name="trouser-waist" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Lap" name="lap" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Hip" name="hip" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Calf" name="calf" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Ankle" name="ankle" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </Box>
                        <Box className="text-center">
                            <Box className="my-3 text-center">
                                <Link href="/register6">
                                    <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                        border border-goldie hover:border-tan">Next
                                    </Button>
                                </Link>
                            </Box>
                            <Box className="text-center my-3">
                                <Link className="text-goldie" href="/register4">Go Back</Link>
                            </Box>
                        </Box>
                    </Box>
                </form>   
            </Card>
        </Box>      
    )
};

export const Reg4 = () => {
    return(
        <Box maxWidth="sm" sx={{ margin:"auto" }} className="my-10">
            <Card className="shadow appearance-none bg-transparent mx-auto">                    
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box maxWidth="sm" className="mx-auto login">
                        <Typography variant="h2"className="text-2xl text-ggreen font-light text-center" gutterBottom>Shirt</Typography>
                        <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>Please provide your measurement in inches</Typography>
                        <Box maxWidth="sm" sx={{ display:"flex", flexDirection:"column" }} className="mb-3 gap-6">
                            <input type="number" placeholder="Shirt Length" name="shirt-length" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Chest" name="chest" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Shoulder" name="shoulder" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Sleeve" name="sleeve" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Stomach" name="stomach" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Collar" name="collar" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </Box>
                        <Box className="text-center">
                            <Box className="my-3 text-center">
                                <Link href="/register5">
                                    <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                        border border-goldie hover:border-tan">Next
                                    </Button>
                                </Link>
                            </Box>
                            <Box className="text-center my-3">
                                <Link className="text-goldie" href="/register3">Go Back</Link>
                            </Box>
                        </Box>
                    </Box>
                </form>   
            </Card>
        </Box>      
    )
};

export const Reg6 = () => {
    return(
        <Box maxWidth="sm" sx={{ margin:"auto" }} className="my-10">
            <Card className="shadow appearance-none bg-transparent mx-auto">                    
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box maxWidth="sm" className="mx-auto login">
                        <Typography variant="h2"className="text-2xl text-ggreen font-light text-center" gutterBottom>Agbada</Typography>
                        <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>Please provide your measurement in inches</Typography>
                        <Box maxWidth="sm" sx={{ display:"flex", flexDirection:"column" }} className="mb-3 gap-6">
                            <input type="number" placeholder="Agbada Length" name="agbada-length" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Agbada Body-Length" name="agbada-bodyLength" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Agbada Chest" name="agbada-chest" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Chest" name="chest" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Back" name="back" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Short Sleeve" name="short-sleeve" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Long Sleeve" name="long-sleeve" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Neck" name="neck" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Stomach" name="stomach" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Trouser Length" name="trouser-length" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Trouser Waist" name="trouser-waist" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Lap" name="lap" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Hip" name="hip" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Calf" name="calf" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="number" placeholder="Cap" name="cap" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </Box>
                        <Box className="text-center">
                            <Box className="my-3 text-center">
                                <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                    border border-goldie hover:border-tan">Submit
                                </Button>
                            </Box>
                            <Box className="text-center my-3">
                                <Link className="text-goldie" href="/register5">Go Back</Link>
                            </Box>
                        </Box>
                    </Box>
                </form>   
            </Card>
        </Box>      
    )
};

export const CustomStyle = () => {
    return(
        <Box maxWidth="sm" sx={{ margin:"auto" }} className="my-10">
            <Card className="shadow appearance-none bg-transparent mx-auto">                    
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box maxWidth="sm" className="mx-auto login">
                        <Typography variant="h2"className="text-2xl text-ggreen font-light text-center" gutterBottom>Upload Your Style!</Typography>
                        <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>Upload up to 3 images of your custom style</Typography>
                        <Box maxWidth="sm" sx={{ display:"flex", flexDirection:"column" }} className="mb-3 gap-6">
                            <input type="file" name="img1" placeholder="Upload" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <input type="file" name="img2" placeholder="Upload" className=" shadow appearance-none border rounded w-1/2 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <input type="file" name="img3" placeholder="Upload" className=" shadow appearance-none border rounded w-1/2 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </Box>
                        <Box className="text-center">
                            <Box className="my-3 text-center">
                                <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                    border border-goldie hover:border-tan">Upload
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </form>   
            </Card>
        </Box>      
    )
};

export const Appointment = () => {
    return(
        <Box maxWidth="sm" sx={{ margin:"auto" }} className="my-10">
        <Card className="shadow appearance-none bg-transparent mx-auto">                    
            <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                <Box maxWidth="sm" className="mx-auto login">
                    <Typography variant="h2"className="text-2xl text-ggreen font-light text-center" gutterBottom>Book Appointment</Typography>
                    <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>We will contact you with the next available appointment date</Typography>
                    <Box maxWidth="sm" sx={{ display:"flex", flexDirection:"column" }} className="mb-3 gap-6">
                        <Grid>
                            <label className="text-ggreen text-l font-semibold mb-2" htmlFor="reason">
                                Why would you like to book this appointment?
                            </label>
                            <textarea name="reason" className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                        </Grid>
                        <Grid>
                        <label className="text-ggreen text-l font-semibold mb-2" htmlFor="firstVisit">
                            Is this your first visit to our offices? 
                        </label>
                        <ul>
                            <li>
                                <Radio value="Yes" size="small" name="firstVisit" />
                                <label htmlFor="firstVisit">Yes</label>
                            </li>
                            <li className="choice-2">
                                <Radio value="No" size="small" name="firstVisit" />
                                <label htmlFor="firstVisit">No</label>
                            </li>
                            <li className="choice-3">
                                <Radio value="Not Sure" size="small" name="firstVisit" />
                                <label htmlFor="firstVisit">Not sure</label>
                            </li>
                        </ul> 
                        </Grid>
                        <Grid>
                        <label className="text-ggreen text-l font-semibold mb-2" htmlFor="callback">
                            Would you prefer a callback instead? 
                        </label>
                        <ul>
                            <li>
                                <Radio value="Yes" size="small" name="callback" />
                                <label htmlFor="callback">Yes</label>
                            </li>
                            <li className="choice-2">
                                <Radio value="No" size="small" name="callback" />
                                <label htmlFor="callback">No</label>
                            </li>
                            <li className="choice-3">
                                <Radio value="Maybe" size="small" name="callback" />
                                <label htmlFor="callback">Maybe</label>
                            </li>
                        </ul> 
                        </Grid>
                        <Grid>
                        <label className="text-ggreen text-l font-semibold mb-2" htmlFor="visitPreference">
                            When would you prefer to visit? 
                        </label>
                        <ul>
                            <li>
                                <Radio value="three_days" size="small" name="firstVisit" />
                                <label htmlFor="visitPreference">Within 72 hours</label>
                            </li>
                            <li>
                                <Radio value="one_week" size="small" name="firstVisit" />
                                <label htmlFor="visitPreference">Within a week</label>
                            </li>
                            <li className="choice-3">
                                <Radio value="two_weeks" size="small" />
                                <label htmlFor="visitPreference">Within 2 weeks</label>
                            </li>
                        </ul> 
                        </Grid>
                    </Box>
                    <Box className="text-center">
                        <Box className="my-3 text-center">
                            <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                border border-goldie hover:border-tan">Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </form>   
        </Card>
    </Box>    
    )
}