import ContactIcons from '../contactIcons';
import Card from '../Card';
import style from './styleSheet';

// UNCOMMENT WHEN BACKEND FUNTIONALITY IS WORKING 
// import ContactForm from './ContactForm';

const Contact = () => {
  
  return (
    <section className='sectionMargin'>
      <Card>
        <p style={style.marginBottom}>
          Let's collaborate <br />
          Browse my gitHub repositories, or check out my linkedIn page. <br/>
          Send me an email or message me on linkedIn! 
        </p>
        <div className='flex' >
          <ContactIcons style={style.marginRight} size={'2.5rem'} color={'var(--header-background, #071013)'} />
        </div>
      </Card>
      
      {/* REMOVE COMMENTS WHEN BACKEND IS WIRED UP TO ACCEPT THE INPUT */}

      {/* <Card style={{ maxWidth: '570px', marginTop: '3rem' }}>
        <h4 style={{ textAlign: 'center' }}>CONTACT ME</h4>
        <ContactForm />
      </Card> */}

    </section>
  )
};

export default Contact;