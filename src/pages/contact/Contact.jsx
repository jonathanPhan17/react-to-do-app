import './Contact.css';

export default function Contact() {

    return (
      <div className="contact-form">
        <h3>Contact Form</h3>
        <form method='post' action='/contact'>
          <label>
            <span>First Name:</span>
            <input type="text" name="firstName" required />
          </label>
          <label>
            <span>Last Name:</span>
            <input type="text" name="lastName" required />
          </label>
          <label>
            <span>Email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Comment:</span>
            <textarea name="comment" required></textarea>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
}

