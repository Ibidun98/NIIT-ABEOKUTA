import React from 'react'
import TextProps from "../../Component/TextProps/TextProps";
import Logo from "../../Assests/Logo.png";
import student from "../../Assests/AboutImage.png";
import Background from "../../Assests/backImage.png";

const ContactAbout = () => {
  return (
    <div>
      <TextProps
      background={Background}
      logo={Logo}
      about="Contact"
      text1= "NIIT Bagged the IDA Education Awards 2019 as the ‘Product/solution/service of the Year for K-12 education’ for its product Practice Plus, in the Education sector"
      text2= "NIIT Bagged the IDA Education Awards 2019 as the ‘Product/solution/service of the Year for K-12 education’ for its product Practice Plus, in the Education sector"
      more="Explore More"
      student={student}
      />
     </div>
  );
};

export default ContactAbout