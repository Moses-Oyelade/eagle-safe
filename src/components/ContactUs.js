import React from 'react'






function ContactUs() {
 const links = {
    github: "https://github.com/Moses-Oyelade/",
    linkedin: "https://www.linkedin.com/in/moses-oyelade-710685162/",
    facebook: "https://www.facebook.com/mosesoladimeji.oyelade/"
  }



      return (
        <div id="contact">
            <h5>CONTACT US</h5>
            <a href={links.github}>github</a>
            <a href={links.linkedin}>linkedin</a>
            <a href={links.facebook}>facebook</a>
        </div>
      )

}

export default ContactUs;
