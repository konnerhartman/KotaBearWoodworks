import React from "react";

const About = () => {
  return (
    <div className="contact row">
      <section class="mb-4 text-white">
        <div>
          <div class="col-md-6 p-3">
            <h2 class="h1-responsive font-weight-bold text-center my-4">Reach Out</h2>
            <p class="text-center w-responsive mx-auto">Do you have any questions about pricing? Want to discuss custom pieces? Please do not hesitate to contact me directly.</p>
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div class="row mb-3">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="name" name="name" class="form-control" />
                    <label for="name" class="">Your name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control" />
                    <label for="email" class="">Your email</label>
                  </div>
                </div>
              </div>
              <div class="row  mb-3">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control" />
                    <label for="subject" class="">Subject</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="col-6">
      </div>
    </div>
  );
};

export default About;
