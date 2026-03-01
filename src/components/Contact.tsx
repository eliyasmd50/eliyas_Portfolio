import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/eliyasmohamed50@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* LEFT SIDE */}
          <div className="col-12 col-lg-4 text-center text-lg-start">
            <h2 className="fw-semibold mb-3">Let’s Work Together</h2>
            <p className="text-secondary mb-0">
              Feel free to reach out for collaborations or opportunities.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-12 col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">

                {submitted ? (
                  <div className="alert alert-success text-center mb-0">
                    Thank you. Your message has been sent successfully.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>

                    {/* Honeypot */}
                    <input
                      type="text"
                      name="_honey"
                      style={{ display: "none" }}
                    />

                    <input type="hidden" name="_captcha" value="true" />

                    <div className="row">
                      <div className="col-12 col-md-6 mb-3">
                        <label className="form-label small text-muted">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required
                          minLength={3}
                          maxLength={50}
                        />
                      </div>

                      <div className="col-12 col-md-6 mb-3">
                        <label className="form-label small text-muted">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label small text-muted">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        className="form-control"
                        required
                        minLength={10}
                        maxLength={500}
                      ></textarea>
                    </div>

                    <div className="d-grid d-md-flex justify-content-md-end">
                      <button
                        type="submit"
                        className="btn btn-dark px-4"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;