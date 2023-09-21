export const Location = () => {
    return(
        <div className="contact-area flex items-center mt-10 mb-5">

            <div className="google-map">
                <div id="googleMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3221598913547!2d3.3459221748366965!3d6.606830722189691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922c2a96a9bd%3A0x1b4ca3112411efbb!2s117%20Obafemi%20Awolowo%20Way%2C%20Ikeja%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1694439529083!5m2!1sen!2sng"
                    width="600" height="450" className="border border-0 mx-auto" loading="lazy"></iframe>
                </div>
            </div>

            <div className="contact-info">
                <h2 className="text-goldie">How to Find <span><h2 className="inline text-bluey">SR LUXURIES</h2></span></h2>
                <p className="mb-4">
                    Need something? Our team is here to help! Please feel free to reach us with
                    the details below, or fill the Contact Form and we will get back to you shortly.
                </p>

                <div className="contact-address mt-50">
                    <p><span className="text-tan">address:</span> 117, Obafemi Awolowo Way, Ikeja, Lagos </p>
                    <p><span className="text-tan">telephone:</span> +234 915 999 9965</p>
                    <p><a href="mailto:contact@srluxuries.com" className="text-butter">contact@srluxuries.com</a></p>
                </div>
            </div>
        </div>
    )
}