


const Contact = () => {

const contactInfo = [
    {
      // icon: <FaMapMarkerAlt />,
      title: "Buttonwood, California.",
      details: "Rosemead, CA 91770",
    },
    {
      // icon: <FaPhoneAlt />,
      title: "+1 253 565 2365",
      details: "Mon to Fri 9am to 6pm",
    },
    {
      // icon: <FaEnvelope />,
      title: "support@colorlib.com",
      details: "Send us your query anytime!",
    },
  ];

  return (
    <>
 <section className="about-full d-flex align-items-center">
      <div className="container">
        <div className="row">
          {/* Text Overlay (left side) */}
          <div className="col-md-6 text-light" data-aos="fade-right">
            <h1 className="fw-bold display-3">Contact Us</h1>
           
          </div>
        </div>
      </div>
    </section>
    
    <div className="container my-5">
      <div className="row">
        {/* Left Side - Form */}
        <div className="col-md-8" data-aos="fade-right">
          <h3 className="mb-4">Get in Touch</h3>
          <form>
            <div className="mb-3">
              <textarea
                className="form-control p-3"
                rows="5"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Enter Subject"
              />
            </div>
            <button type="submit" className="btn btn-outline-danger px-4 py-2">
              SEND
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="col-md-4" data-aos="fade-left">
          {contactInfo.map((info, index) => (
            <div className="d-flex align-items-start mb-4" key={index}>
              <div className="me-3 fs-4">{info.icon}</div>
              <div>
                <h6 className="fw-bold mb-1">{info.title}</h6>
                <p className="mb-0 text-muted">{info.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  );
};

export default Contact;
 