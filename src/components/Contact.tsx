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
    <section id="contact" className="contact-section section-wrap">
      <div className="section-label">Contact <span>04</span></div>
      <div className="contact-layout">
        <div className="contact-copy"><h2>Have a good<br /><em>idea?</em></h2><p>Tell me about it. I&apos;m always open to thoughtful collaborations, ambitious products, and good conversations.</p><a href="mailto:eliyasmohamed50@gmail.com">eliyasmohamed50@gmail.com ↗</a></div>
        <div className="contact-form-wrap">

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

                    <div className="form-row">
                      <div><label>Full name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required
                          minLength={3}
                          maxLength={50}
                        />
                      </div>

                      <div><label>Email address</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="message-field"><label>Message</label>
                      <textarea
                        name="message"
                        rows={5}
                        className="form-control"
                        required
                        minLength={10}
                        maxLength={500}
                      ></textarea>
                    </div>

                    <div className="form-submit"><button type="submit" className="primary-button"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send message ↗"}
                      </button>
                    </div>

                  </form>
                )}

        </div>
      </div>
    </section>
  );
};

export default Contact;