export default function Contact() {
  return (
    <section className="contact_section layout_padding-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="offset-lg-2 col-md-10 offset-md-1">
            <div className="heading_container">
              <hr />
              <h2>For questions and suggestions, write us</h2>
            </div>
          </div>
        {/* </div> */}

        <div className="layout_padding2-top">
          {/* <div className="row"> */}
            <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
              <form action="">
                <div className="contact_form-container">
                  <div>
                    <div>
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div>
                      <input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="message_input"
                        placeholder="Message"
                      />
                    </div>
                    <div>
                      <button type="submit">Send</button>
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
