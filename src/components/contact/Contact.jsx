import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
    const map= 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54460.63893901988!2d74.3243776!3d31.4474496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1725643690678!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
      <Back title='Contact Us'/>
      <section className="contact padding">
        <div className="container shadow flexSB">
            <div className="Left row">
                <iframe src={map}></iframe>
            </div>
            <div className="right row">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <div className="items grid2">
                <div className="box">
                <h4>ADDRESS: </h4>
                <p>151 west 12 Street, suite 33  Gujrat</p>
            </div>
            <div className="box">
                <h4>Email:</h4>
                <p>info@gmail.com</p>
            </div>
            <div className="box">
                <h4>Phone:</h4>
                <p>+92334545</p>
            </div>
        </div>
        <form action="">
            <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
      
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10">
                Creating a message here
            </textarea>
            <button className="primary-btn">Send Message</button>
            /</form>
            <h3>Follow us here</h3>
            <span>Facebook,Instagram,Tweitter,LinkIn</span>
        
            </div>
            
            
            </div>
        
      </section>
    </>
  )
}

export default Contact
