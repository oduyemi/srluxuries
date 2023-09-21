import Link from "next/link"

export const LoginForm = () => {
    return(
        <section className="my-5">
        <div className="form login bg-transparent border-butter w-1/4 border border-2 border-rounded mx-auto">
            <div className="w-full mx-auto">
                <form className="mt-5 pl-4">
                    <div className="form-header text-center my-3">
                        <h2 className="text-2xl text-ggreen font-bold">Welcome Back!</h2>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mail" className="text-ggreen text-l font-light">Email: </label>
                        <input type="email" placeholder="Email Address" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="text-ggreen text-l font-light">Password: </label>
                        <input type="text" placeholder="Password" className="ml-1 p-2 border border-rounded border-2 border-ggreen" />
                    </div>

                    <div className="my-3 text-center">
                        <Link href="/custom-image">
                            <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                border border-goldie hover:border-tan">Login</button>
                        </Link>
                    </div>
                    <div className="text-center my-3">
                      <span className="text-brownie ps-3 text-xs mr-3">Not Registered Yet? <Link className="text-goldie" href="/register">Click Here</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
} 

export const Reg1 = () => {
    return(
        <section className="my-5">
            <div className="form bg-transparent border-butter w-1/4 border border-2 border-rounded mx-auto">
                <div className="w-full mx-auto">
                    <form className="mt-5 pl-4">
                        <div className="form-header text-center">
                            <h2 className="text-2xl text-ggreen font-bold">Join the SR Club</h2>
                            <p className="text-sm mt-2">Please fill in your details</p>
                        </div>
                        <div className="mb-3 mt-5">
                            <label htmlFor="clientName" className="text-ggreen text-l font-light">Name: </label>
                            <input type="text" placeholder="Your Name" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mail" className="text-ggreen text-l font-light">Email: </label>
                            <input type="email" placeholder="Email Address" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="phone" className="text-ggreen text-l font-light">Phone: </label>
                        <input type="number" placeholder="Phone Number" className="ml-7 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="text-ggreen text-l font-light">Password: </label>
                            <input type="text" placeholder="Password" className="ml-1 p-2 border border-rounded border-2 border-ggreen" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="c-password" className="text-ggreen text-l font-light">Password: </label>
                            <input type="text" placeholder="Confirm Password" className="ml-1 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="address" className="text-ggreen text-l font-light">Address: </label>
                        <textarea placeholder="Your Address" className="ml-4 p-4 border border-rounded border-2 border-ggreen"></textarea>
                        </div>

                        <div className="my-3 text-center">
                            <Link href="/register2">
                                <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                    border border-goldie hover:border-tan">Next</button>
                            </Link>
                        </div>

                        <div className="text-center my-3">
                            <span className="text-brownie ps-3 text-xs mr-3">Already have an account? <Link className="text-goldie" href="/login">Click Here</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export const Reg2 = () => {
    return(
        <section className="my-5">
            <div className="form bg-transparent border-butter w-1/4 border border-2 border-rounded mx-auto">
                <div className="w-full mx-auto">
                    <form className="mt-5 pl-4">
                        <div className="form-header text-center">
                            <h2 className="text-2xl text-ggreen font-bold">Blazer and Kaftan</h2>
                            <p className="text-sm">Please provide your measurement in inches</p>
                        </div>
                        <div className="mb-3 mt-5">
                            <label htmlFor="top-length" className="text-ggreen text-l font-light">Length: </label>
                            <input type="number" placeholder="Length" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="shoulder" className="text-ggreen text-l font-light">Shoulder: </label>
                            <input type="number" placeholder="Shoulder" className="ml-4 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="chest" className="text-ggreen text-l font-light">Chest: </label>
                        <input type="number" placeholder="Chest" className="ml-10 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="blazer-stomach" className="text-ggreen text-l font-light">Stomach: </label>
                            <input type="number" placeholder="Stmach" className="ml-4 p-2 border border-rounded border-2 border-ggreen" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="blazer-sleeve" className="text-ggreen text-l font-light">Sleeve: </label>
                            <input type="number" placeholder="Sleeve" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="bicep" className="text-ggreen text-l font-light">Bicep: </label>
                        <input type="number" placeholder="Bicep" className="ml-10 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>
                        
                        <div className="my-3 text-center">
                            <Link href="/register3">
                                <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                    border border-goldie hover:border-tan">Next</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export const Reg3 = () => {
    return(
        <section className="my-5">
            <div className="form bg-transparent border-butter w-1/4 border border-2 border-rounded mx-auto">
                <div className="w-full mx-auto">
                    <form className="mt-5 pl-4">
                        <div className="form-header text-center">
                            <h2 className="text-2xl text-ggreen font-bold">Trouser</h2>
                            <p className="text-sm">Please provide your measurement in inches</p>
                        </div>
                        <div className="mb-3 mt-5">
                            <label htmlFor="trouser-length" className="text-ggreen text-l font-light">Length: </label>
                            <input type="number" placeholder="Length" className="ml-6 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="waist" className="text-ggreen text-l font-light">Waist: </label>
                            <input type="number" placeholder="Waist" className="ml-9 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="hip" className="text-ggreen text-l font-light">Hip: </label>
                        <input type="number" placeholder="Hip" className="ml-12 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="tommy" className="text-ggreen text-l font-light">Knee: </label>
                            <input type="number" placeholder="Tommy" className="ml-9 p-2 border border-rounded border-2 border-ggreen" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="leg" className="text-ggreen text-l font-light">Leg: </label>
                            <input type="number" placeholder="Leg" className="ml-12 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="my-3 text-center">
                            <Link href="/register4">
                                <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                    border border-goldie hover:border-tan">Next</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export const Reg5 = () => {
    return(
        <section className="my-5">
            <div className="form form-suit bg-transparent border-butter w-1/4 border border-2 border-rounded mx-auto">
                <div className="w-full mx-auto">
                    <form className="mt-5 pl-4">
                        <div className="form-header text-center">
                            <h2 className="text-2xl text-ggreen font-bold">Suit</h2>
                            <p className="text-sm">Please provide your measurement in inches</p>
                        </div>
                        <div className="mb-3 mt-5">
                            <label htmlFor="suit-length" className="text-ggreen text-l font-light">Length: </label>
                            <input type="number" placeholder="Length" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="body" className="text-ggreen text-l font-light">Body: </label>
                            <input type="number" placeholder="Round Body" className="ml-11 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="sleeve" className="text-ggreen text-l font-light">Sleeve: </label>
                        <input type="number" placeholder="Sleeve" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="back" className="text-ggreen text-l font-light">Back: </label>
                            <input type="number" placeholder="Back" className="ml-11 p-2 border border-rounded border-2 border-ggreen" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sleeve" className="text-ggreen text-l font-light">Sleeve: </label>
                            <input type="number" placeholder="Sleeve" className="ml-7 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="round-sleeve" className="text-ggreen text-l font-light">Sleeve: </label>
                            <input type="number" placeholder="Round Sleeve" className="ml-7 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="suit-trouser-length" className="text-ggreen text-l font-light">Length: </label>
                            <input type="number" placeholder="Trouser Length" name="suit-trouser-length" className="ml-7 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="suit-trouser-waist" className="text-ggreen text-l font-light">Waist: </label>
                            <input type="number" placeholder="Trouser Waist" name="suit-trouser-waist" className="ml-9 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="suit-lap" className="text-ggreen text-l font-light">Lap: </label>
                            <input type="number" placeholder="Lap" name="suit-lap" className="ml-12 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="suit-hip" className="text-ggreen text-l font-light">Hip: </label>
                            <input type="number" placeholder="Hip" name="suit-hip" className="ml-12 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="suit-calf" className="text-ggreen text-l font-light">Calf: </label>
                            <input type="number" placeholder="Calf" name="suit-calf" className="ml-11 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="suit-ankle" className="text-ggreen text-l font-light">Ankle: </label>
                            <input type="number" placeholder="Ankle" name="suit-ankle" className="ml-8 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="my-3 text-center">
                            <Link href="/register6">
                                <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                    border border-goldie hover:border-tan">Next</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export const Reg4 = () => {
    return(
        <section className="my-5">
            <div className="form bg-transparent border-butter w-1/4 border border-2 border-rounded mx-auto">
                <div className="w-full mx-auto">
                    <form className="mt-5 pl-4">
                        <div className="form-header text-center">
                            <h2 className="text-2xl text-ggreen font-bold">Shirt</h2>
                            <p className="text-sm">Please provide your measurement in inches</p>
                        </div>
                        <div className="mb-3 mt-5">
                            <label htmlFor="shirt-length" className="text-ggreen text-l font-light">Length: </label>
                            <input type="number" placeholder="Length" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="shirt-chest" className="text-ggreen text-l font-light">Chest: </label>
                            <input type="number" placeholder="Chest" name="shirt-chest" className="ml-10 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="shirt-shoulder" className="text-ggreen text-l font-light">Shoulder: </label>
                            <input type="number" placeholder="Shoulder/Back" name="shirt-shoulder-back" className="ml-4 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="shirt-sleeve" className="text-ggreen text-l font-light">Sleeve: </label>
                            <input type="number" placeholder="Sleeve" name="shirt-sleeve" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="shirt-stomach" className="text-ggreen text-l font-light">Stomach: </label>
                            <input type="number" placeholder="Stomach" name="shirt-stomach" className="ml-4 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="shirt-collar" className="text-ggreen text-l font-light">Collar: </label>
                            <input type="number" placeholder="Collar" name="shirt-collar" className="ml-10 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="my-3 text-center">
                            <Link href="/register5">
                                <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                    border border-goldie hover:border-tan">Next</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export const Reg6 = () => {
    return(
        <section className="my-5">
            <div className="form bg-transparent border-butter w-1/4 border border-2 border-rounded mx-auto">
                <div className="w-full mx-auto">
                    <form className="mt-5 pl-4">
                        <div className="form-header text-center">
                            <h2 className="text-2xl text-ggreen font-bold">Agbada</h2>
                            <p className="text-sm">Please provide your measurement in inches</p>
                        </div>
                        <div className="mb-3 mt-5">
                            <label htmlFor="agbada-length" className="text-ggreen text-l font-light">Length: </label>
                            <input type="number" placeholder="Length" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-body-length" className="text-ggreen text-l font-light">Body: </label>
                            <input type="number" placeholder="Body Length" className="ml-11 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="agbada-chest" className="text-ggreen text-l font-light">Chest: &nbsp;</label>
                        <input type="number" placeholder="Chest" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-back" className="text-ggreen text-l font-light">Back: &nbsp;</label>
                            <input type="number" placeholder="Back" className="ml-10 p-2 border border-rounded border-2 border-ggreen" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="agbada-short-sleeve" className="text-ggreen text-l font-light">Sleeve: </label>
                            <input type="number" placeholder="Short Sleeve" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-long-sleeve" className="text-ggreen text-l font-light">Sleeve: </label>
                            <input type="number" placeholder="Long Sleeve" className="ml-8 p-2 border border-rounded border-2 border-ggreen" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-ankle-sleeve" className="text-ggreen text-l font-light">Sleeve: </label>
                            <input type="number" placeholder="Neck" name="agbada-ankle-sleeve" className="ml-8 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-stomach" className="text-ggreen text-l font-light">Stomach: </label>
                            <input type="number" placeholder="Stomach" className="ml-4 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-trouser-length" className="text-ggreen text-l font-light">Length: </label>
                            <input type="number" placeholder="Trouser Length" name="agbada-trouser-length" className="ml-8 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-trouser-waist" className="text-ggreen text-l font-light">Waist: </label>
                            <input type="number" placeholder="Trouser Waist" name="agbada-trouser-waist" className="ml-10 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-lap" className="text-ggreen text-l font-light">Lap: &nbsp;</label>
                            <input type="number" placeholder="Lap" name="agbada-lap" className="ml-12 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-hip" className="text-ggreen text-l font-light">Hip: &nbsp;</label>
                            <input type="number" placeholder="Hip" name="agbada-hip" className="ml-12 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-calf" className="text-ggreen text-l font-light">Calf: </label>
                            <input type="number" placeholder="Calf" name="agbada-calf" className="ml-12 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-neck" className="text-ggreen text-l font-light">Neck: </label>
                            <input type="number" placeholder="Neck" name="agbada-neck" className="ml-10 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="agbada-cap" className="text-ggreen text-l font-light">Cap: </label>
                            <input type="number" placeholder="Cap" name="agbada-cap" className="ml-12 p-2 border border-rounded border-2 border-ggreen"/>
                        </div>

                        <div className="my-3 text-center">
                            <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                border border-goldie hover:border-tan">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export const CustomStyle = () => {
    return(
        <section className="my-5">
        <div className="form form-suit bg-transparent border-butter w-1/4 border border-2 border-rounded mx-auto">
            <div className="w-full mx-auto">
                <form className="mt-5 pl-4">
                    <div className="form-header text-center my-3">
                        <h2 className="text-2xl text-ggreen font-bold">Upload Your Style!</h2>
                        <p className="text-sm mt-2">Upload up to 3 images of your custom design</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img1" className="text-ggreen text-l font-semibold mb-2">Image 1</label>
                        <input type="file" placeholder="Upload Your Style" name="img1" className="p-2 border border-rounded border-2 border-ggreen" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="img2" className="text-ggreen text-l font-semibold mb-2">Image 2</label>
                        <input type="file" placeholder="Upload a second Image" name="img2" className="p-2 border border-rounded border-2 border-ggreen" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="img3" className="text-ggreen text-l font-semibold mb-2">Image 3</label>
                        <input type="file" placeholder="Upload a third Image" name="img3" className="p-2 border border-rounded border-2 border-ggreen" />
                    </div>

                    <div className="mb-3 mt-5">
                            <textarea placeholder="Please type in the extra details" cols={32} name="img-msg" className="p-4 border border-rounded border-2 border-ggreen"></textarea>
                        </div>

                    <div className="my-3 text-center">
                        <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                    border border-goldie hover:border-tan">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
};

export const Appointment = () => {
    return(
        <section className="my-5">
            <div className="form form-apt bg-transparent border-butter w-1/4 border border-2 border-rounded mx-auto">
                <div className="w-full mx-auto">
                    <form className="mt-5 pl-4" method="post" action="/">
                        <div className="form-header text-center my-3">
                            <h2 className="text-2xl text-ggreen font-bold">Book Appointment</h2>
                            {/* <p className="text-sm mt-2">Upload up to 3 images of your custom design</p> */}
                        </div>
                        <div data-field-id="1">
                            <div className="mb-3 mt-5">
                                <label htmlFor="name" className="text-ggreen text-l font-semibold mb-2">Name</label>
                                <input type="text" placeholder="Your Name" className="ml-5 p-2 border border-rounded border-2 border-ggreen" />
                            </div>
                            <div className="mb-3 mt-5">
                                <label htmlFor="mail" className="text-ggreen text-l font-semibold">Email </label>
                                <input type="email" placeholder="Your Email" className="ml-4 p-2 border border-rounded border-2 border-ggreen" />
                            </div>
                            <div className="mb-3 mt-5">
                                <label htmlFor="phone" className="text-ggreen text-l font-semibold">Phone: </label>
                                <input type="number" placeholder="Your Phone Number" className="ml-1 p-2 border border-rounded border-2 border-ggreen" />
                            </div>
                        </div>
                           
                            <div className="mb-3 mt-5" data-field-id="2">
                                <label className="text-ggreen text-l font-semibold mb-2" htmlFor="reason">
                                Why would you like to book this appointment? 
                                <span className="">*</span>
                                </label><textarea cols={32} name="reason" className="p-4 border border-rounded border-2 border-ggreen"></textarea>
                            </div>
                            <div className="" data-field-id="3">
                                <label className="text-ggreen text-l font-semibold mb-2" htmlFor="firstVisit">
                                Is this your first visit to our offices? 
                                <span className="">*</span>
                                </label>
                                <ul className="">
                                <li className="choice-1 depth-1">
                                <input type="radio" name="firstName" value="Yes" required />
                                <label className="" htmlFor="">Yes</label>
                                </li>
                                <li className="choice-2 depth-1">
                                <input type="radio" name="firstName" value="No" required />
                                <label className="" htmlFor="">No</label>
                                </li>
                                <li className="choice-3 depth-1">
                                <input type="radio" name="firstName" value="Not sure" required />
                                <label className="" htmlFor="">Not sure</label>
                                </li>
                                </ul>
                            </div>                
                        <div className="" data-field-id="4">
                            <label className="text-ggreen text-l font-semibold mb-2" htmlFor="callBack">Would you prefer a call back instead?</label>
                                <ul className="">
                                    <li className="choice-1 depth-1">
                                    <input type="radio" name="callBack" value="Yes" required />
                                    <label className="" htmlFor="">Yes</label>
                                    </li>
                                    <li className="choice-2 depth-1"><input type="radio" name="callBack" value="No" required />
                                    <label className="" htmlFor="">No</label>
                                    </li>
                                </ul>
                        </div>
                        <div className="" data-field-id="5">
                            <label className="text-ggreen text-l font-semibold mb-2" htmlFor="visitPrefrence">When would you prefer to visit?</label>
                                <ul>
                                    <li className="choice-1 depth-1">
                                    <input type="radio" name="visitPrefrence" value="Within 72 hours" />
                                    <label className="" htmlFor="">Within 72 hours</label>
                                    </li>
                                    
                                    <li className="choice-2 depth-1">
                                    <input type="radio" name="visitPrefrence" value="Within 1 week" />
                                    <label className="" htmlFor="">Within 1 week</label>
                                    </li>
                                    
                                    <li className="choice-3 depth-1">
                                    <input type="radio" name="visitPrefrence" value="Within 2 weeks" />
                                    <label className="" htmlFor="">Within 2 weeks</label>
                                    </li>
                                </ul>
                        </div>
                        <div className="">
                            <input type="hidden" name="" value="" />
                            <input type="hidden" name="" value="1" />
                            <input type="hidden" name="" value="" />
                            <div className="my-3 text-center">
                                <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                    border border-goldie hover:border-tan">Upload</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}