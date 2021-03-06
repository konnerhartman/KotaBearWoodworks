import React from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

  function sendEmail(e) {

    e.preventDefault();

    emailjs.sendForm('service_cu1kehw', 'template_3p56679', e.target, 'sGi0Fy7UX2yCkogHD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="contact row text-cetner">
      <section className="mb-4 text-white">
        <div className='container'>
          <div className='row'>
            <div className="col-md-6 p-3">
              <h2 className="h1-responsive font-weight-bold text-center my-4"><span>Reach Out</span></h2>
              <p className="text-center w-responsive mx-auto">Do you have any questions about pricing? Want to discuss custom pieces? Please do not hesitate to contact me directly.</p>
              <form onSubmit={sendEmail} id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="name" name="name" className="form-control" required />
                      <label className="">Your name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="email" name="email" className="form-control" required />
                      <label className="">Your email</label>
                    </div>
                  </div>
                </div>
                <div className="row  mb-3">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="subject" name="subject" className="form-control" required />
                      <label className="">Subject</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" required></textarea>
                      <label>Your message</label>
                    </div>
                  </div>
                  <div className='text-end'>
                    <button className='btn btn-secondary px-4' type="submit">
                      Send <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
