import React from 'react'
import image from './about-image.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <section className="container p-5">
        <div className="row">
          <div className="col-lg-8">
            <img src={image} alt="" className="w-100 banner" />
          </div>
          <div className="col-lg-4 text-center">
            <div className="container text-start mt-2">
              <h1>About Us</h1>
              <ul className="list-unstyled text">
                <li className="d-flex align-items-center mb-3">
                  <span
                    className="text-success mr-2"
                    style={{ fontSize: '24px' }}
                  >
                    ✔
                  </span>
                  <strong> Wide Fleet of Vehicles</strong>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <span
                    className="text-success mr-2"
                    style={{ fontSize: '24px' }}
                  >
                    ✔
                  </span>
                  <strong> Transparent Pricing</strong>:
                </li>
                <li className="d-flex align-items-center mb-3">
                  <span
                    className="text-success mr-2"
                    style={{ fontSize: '24px' }}
                  >
                    ✔
                  </span>
                  <strong> Flexible Rental Options</strong>:
                </li>
                <li className="d-flex align-items-center mb-3">
                  <span
                    className="text-success mr-2"
                    style={{ fontSize: '24px' }}
                  >
                    ✔
                  </span>
                  <strong> Easy Online Booking</strong>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <span
                    className="text-success mr-2"
                    style={{ fontSize: '24px' }}
                  >
                    ✔
                  </span>
                  <strong> 24/7 Customer Support</strong>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <span
                    className="text-success mr-2"
                    style={{ fontSize: '24px' }}
                  >
                    ✔
                  </span>
                  <strong> Well-Maintained Cars</strong>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <span
                    className="text-success mr-2"
                    style={{ fontSize: '24px' }}
                  >
                    ✔
                  </span>
                  <strong> Free Cancellation</strong>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <span
                    className="text-success mr-2"
                    style={{ fontSize: '24px' }}
                  >
                    ✔
                  </span>
                  <strong> Multiple Pick-Up Locations</strong>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary mt-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
