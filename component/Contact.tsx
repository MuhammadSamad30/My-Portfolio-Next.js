import "boxicons/css/boxicons.min.css";
import Image from "next/image"

const Contact1 = () => {
  return (
        <div id="contact-container">
          <div id="imageSection">
            <Image
              src="/contact-pic.png"
              alt="Envelope Icon"
              width={300}
              height={300}
            />
          </div>
          <div id="formSection">
            <form id="contactForm">
            <h1 id="review"> Write your review <i className='bx bxs-pencil'></i></h1>
              <div id="inputGroup">
                <input type="text" placeholder="Name" required />
              </div>
              <div id="inputGroup">
                <input type="email" placeholder="Email" required />
              </div>
              <div id="inputGroup">
                <textarea placeholder="Message" required></textarea>
              </div>
              <button type="submit" id="submitButton">Send</button>
            </form>
          </div>
        </div>
  )
}

export default Contact1