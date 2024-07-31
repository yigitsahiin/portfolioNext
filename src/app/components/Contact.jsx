export default function Contact() {
    return (
      <section className="contact" id="contact">
        <h2 className="heading">Contact</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Enter your number" />
            <input type="text" placeholder="Enter your subject" />
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    );
  }
  