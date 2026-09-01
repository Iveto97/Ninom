
import { IoPerson } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

export default function Contact() {
  return (
    <section className="contact_section layout_padding-bottom">
      <div className="container-fluid">
        <div className="row-contact">
          <div className="">
            <div className="heading_container">
              <hr />
              <h2>For questions and suggestions, write us</h2>
            </div>
          </div>
        {/* </div> */}

        <div className="layout_padding2-top">
          {/* <div className="row"> */}
            <div className="contact-form-container">
              <form action="">
                <div className="contact_form-container">
                  <div>
                    <div className="name-input">
                      <span><IoPerson /></span>
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="name-input">
                      <span><MdOutlineMarkEmailRead /></span>
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="name-input">
                      <span><BsFillTelephoneFill /></span>
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className="name-input">
                      <span><FaPencilAlt /></span>
                      <input
                        type="text"
                        className="message_input"
                        placeholder="Message"
                      />
                    </div>
                    <div>
                      <button type="submit"><span><LuSend /></span>Send</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
          {/* </div> */}
        </div>
        </div>
      </div>
    </section>
  );
}
