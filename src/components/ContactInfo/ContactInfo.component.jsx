import './ContactInfo.styles.css'

const ContactInfo = () => {

  return (
    <div className="contact-info">
      {/* <h1 className='contact-header'>צור קשר</h1> */}
      <div className='black-contact'>
        <h3 className='white-text contact-txt'>מוזמנים לפנות אלינו במייל:</h3>
        <h1 className='white-text mail'>know.it.till@gmail.com</h1>
      </div>
    </div>
  );
}

export default ContactInfo;