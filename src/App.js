import  "./App.css";
import image from "./image/announcement.jpg";
import { useRef, useState,useEffect } from "react";
import {Link} from "react-router-dom";



function App() {
  const headerRef=useRef(null);
  
   useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 122) {
        headerRef.current.classList.add("sticky");
        headerRef.current.style.width="80%";
        
        // headerRef.current.style.backgroundColor="#554a4a";
        // console.log("added");
      } else {
        headerRef.current.classList.remove("sticky");
        
      }

      // setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
      const social=()=>{
   console.log("clicked");
  }

  
  return (
    <>

<nav>
<div className="image-container"><img  id="image"src={image} alt="announcement" /></div>
  <div className="nav-content">
    <span style={{color:"grey",font:"19px italic", margin:"20px 0px 20px"}} > Stay Informed About the Latest Scams and How to Avoid Them</span> <br></br>
   <span style={{color:"grey",font:"19px italic", margin:"20px 0px 20px"}}>Protect Yourself from Scams with These Essential Tips</span><br></br>
  <span style={{color:"grey",font:"19px italic", margin:"20px 0px 20px"}}> Don't Fall Victim to Scams: Learn How to Stay Safe Online</span><br></br>
  
  </div>
</nav>
{/* body */}
<diV className="body-header">
<div className="body-container" ref={headerRef}>
<diV style={{fontWeight:"bold", fontSize:"20px",  textAlign:"start"}}>News</diV>
<diV className="header-item">Artificial Intelligence</diV>
<diV className="header-item">IoT</diV>
<diV className="header-item">Cloud</diV>
 <diV className="header-item">Frame Work</diV> 
<diV className="header-item">Project</diV>
<diV className="header-item">Research</diV>
<diV className="header-item"></diV> 
<div ></div>

<div className="icon-style" style={{float:"left", marginRight:"20px", marginTop:"10px"}}>
  <i className="fa-solid fa-user-lock"></i>
</div>

</div>
<hr style={{width:"100%", height:"2px", backgroundColor:"grey", boxShadow:"0 4px 4px 6px rgba(0,0,0,0.1)"}}></hr>
</diV>

{/* content */}
<div className="main-content">
   <div className="sideBar">
      <h4>Overview</h4>
      <ul>
        <li onClick={social}>Social Engineering</li>
        <li>Cyber Attacks</li>
        <li>AI Security</li>
        <li>Cloud Security</li>
        <li>Thread Management</li>
        <li>Infrastructure Security</li>
        <li>Data Protection</li>
        <li>Privacy Compliance</li>
         <li>Management Security</li>
        
      </ul>
   </div>
   <div className="content">
      <h2 >What is Social Engineering?</h2>
      <p style={{margin:"20px 0px",fontWeight:"170px"}}>Social engineering is the psychological manipulation of people into performing actions or divulging confidential information. It is a tactic used by cybercriminals to exploit human psychology rather than technical vulnerabilities.
      Social engineering attacks manipulate people into sharing information that they shouldn’t share, downloading software that they shouldn’t download, visiting websites they shouldn’t visit, sending money to criminals or making other mistakes that compromise their personal or organizational security.
      </p>

      <p style={{margin:"20px 0px"}}>An email that seems to be from a trusted coworker requesting sensitive information, a threatening voicemail claiming to be from the IRS and an offer of riches from a foreign potentate are just a few examples of social engineering. Because social engineering uses psychological manipulation and exploits human error or weakness rather than technical or digital system vulnerabilities, it is sometimes called "human hacking".</p>

      <p style={{margin:"20px 0px"}}> Cybercriminals frequently use social engineering tactics to obtain personal data or financial information, including login credentials, credit card numbers, bank account numbers and Social Security numbers. They use the stolen information for identity theft, enabling them to make purchases using other peoples’ money or credit, apply for loans in someone else’s name, apply for other peoples’ unemployment benefits and more.</p>

      <p style={{margin:"20px 0px"}}>But a social engineering attack can also be the first stage of a larger-scale cyberattack. For example, a cybercriminal might trick a victim into sharing a username and password and then use those credentials to plant <a href="https://www.ibm.com/think/topics/ransomware">ransomware</a> on the victim’s employer’s network.</p>
 </div>
 </div>

<h2 style={{margin:"40px 0px",letterSpacing:"3px", fontWeight:"10px", textAlign:"center"}}> RESOURCES</h2>
 <div className="content_1">
 <div className="content_Data">
 <div className="content_item">
 <span style={{color:"grey" , fontSize:"15px", textAlign:"left"}}>Report</span>
 <p>After the disappearance of Malaysia Airlines Flight MH370, scammers spread fake links and videos claiming the plane was found with survivors.</p>
 <p style={{margin:"10px 0px"}}><strong>Deception:</strong> The scammers exploited the public's hope and curiosity to drive traffic to their fake content, which likely contained malware or phishing attempts.</p>
 <span style={{color:"grey" , fontSize:"15px", textAlign:"left"}}>Fake Links and Videos  <a href="https://www.scamwatch.gov.au/news-alerts/scammers-exploit-mh370-disappearance">Learn More</a></span>
 </div>
 <div className="content_item">
 <span style={{color:"grey" , fontSize:"15px",margin:"10px 0px", textAlign:"left"}}>Cyberattack</span>
 
 <p>Veteran actor Warren Beatty received a phishing email impersonating fellow actor Eddie Redmayne, requesting money because of “financial trouble.”</p>
 <p style={{margin:"10px 0px"}}> <strong>Deception:</strong> The scammer pretended to be someone Beatty knew to increase trust and elicit a quick positive response.</p>
 
 <span style={{color:"grey" , fontSize:"15px", textAlign:"left"}}>Phishing Email   <a href="https://www.ibm.com/think/topics/phishing">Learn More</a></span>
 </div>
 <div className="content_item">
 <span style={{color:"grey" , fontSize:"15px", textAlign:"left"}}>Decision</span>
<p> Fake text messages claiming the recipient owed unpaid toll fees and directing them to phishing websites that look like official services.
</p>

<p style={{margin:"10px 0px"}}><strong>Deception:</strong> The messages appear  pushing victims to enter credit card or login information.</p>
<span style={{color:"grey" , fontSize:"15px", textAlign:"left"}}>Phishing Ems  <a href="https://nypost.com/2025/01/28/tech/fake-toll-road-texts-sweep-america-as-chinese-scammers-target-us-drivers/?utm_source">Learn More</a></span>
</div>

 </div>


 </div>

  <div className="content_2" >
  <div className="content_2-item " style={{margin:"40px 0px",  width:"90%",justifyItems:"center", margin:"60px 10px 0px", height:"auto", padding:"20px 0px", display:"flex", flexDirection:"column", alignItems:"center"}}> 
  <div style={{fontSize:"20px", fontWeight:"bold", color:"#fff", textAlign:"center"}}>
  <iframe
    src="https://www.youtube.com/embed/8TwrTQpvG0M
"
    title="YouTube video player"
    style={{ top: 0, left: 0, width: "100%", height: "35vh", margin:"10px 0px",}}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

<div style={{margin:"20px 0px", fontSize:"15px", backgroundColor:"#00000070", textAlign:"center"}}>
  <iframe
    src="https://www.youtube.com/embed/uvKTMgWRPw4?t=30s"
    title="YouTube video player"
    style={{ top: 0, left: 0, width: "100%", height: "35vh", margin:"10px 0px",}}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

  </div>
  <div className="content_2-item ">
      <h2 style={{margin:"50px 0px "}}>How to Protect Yourself And Identify Social Engineering Attacks</h2>
      <p style={{margin:"-20px 0px"}}>Social engineering tactics and techniques are grounded in the science of human motivation. They manipulate victims’ emotions and instincts in ways proven to drive people to take actions that are not in their best interests.</p>
      <p style={{margin:"40px 0px"}}> <strong>Posing as a trusted brand:</strong> Scammers often impersonate or "spoof" companies that victims know, trust and perhaps do business with often or regularly, so regularly that they follow instructions from these brands reflexively, without taking the proper precautions. Some social engineering scammers use widely available kits for staging fake websites that resemble those of major brands or companies.</p>
      <p>Posing as a government agency or authority figure: People trust, respect or fear authority (in varying degrees). Social engineering attacks play on these instincts with messages that appear or claim to be from government agencies (example: the FBI or IRS), political figures or even celebrities.</p>
      <p style={{margin:"40px 0px"}}><strong>Creating a sense of urgency:</strong> Social engineering attacks often create a sense of urgency, prompting victims to act quickly, without thinking. For example, an email might claim that a bank account will be closed or a credit card cancelled unless the victim responds immediately.</p>
      <p><strong>Offering something enticing:</strong> Social engineering attacks often dangle something appealing in front of victims to entice them to take the bait. Examples include winning a lottery or sweepstakes, receiving a gift card or free product, getting a discount on a purchase or obtaining exclusive information.</p>
      <p style={{margin:"40px 0px"}}><strong>Using fear or threats:</strong> Social engineering attacks sometimes use fear or threats to intimidate victims into complying with their demands. Examples include threatening legal action, arrest, deportation or harm to the victim or their loved ones.</p>
      <p><strong>Building rapport or trust:</strong> Some social engineering attacks involve building rapport or trust with victims over time, through repeated interactions or communications. This approach is often used in spear-phishing attacks, where the attacker researches the victim and tailors their messages to appear more credible and trustworthy.</p>
      <p style={{margin:"40px 0px"}}>To protect yourself from social engineering attacks, be cautious when receiving unsolicited communications, verify the identity of the sender, avoid clicking on links or downloading attachments from unknown sources, and use strong, unique passwords for your online accounts. Additionally, stay informed about common social engineering tactics and educate yourself on how to recognize and respond to them.</p>
</div>
</div>


{/* Footer */}


<div className="footer">
<div className="sub_footer">

{/* <div className="sub_footer_item">jdj</div> */}
<div  style={{background:"transparent",color:"white", fontSize:"18px", textAlign:"center" ,margin:"10px 0px"}}>Social Engineering News</div>
<div style={{background:"transparent",color:"white", fontSize:"18px", textAlign:"center", margin:"10px 0px"}}>Contact Us</div>
<div style={{background:"transparent",color:"white", fontSize:"18px", textAlign:"center", margin:"10px 0px"}}>Privacy Policy</div> 
<div style={{background:"transparent",color:"white", fontSize:"18px", textAlign:"center", margin:"10px 0px"}}>Terms of Service</div>
<div style={{background:"transparent",color:"white", fontSize:"18px", textAlign:"center", margin:"10px 0px"}}>About Us</div> 
</div>
<hr style={{background:"white", height:"1px"}}></hr>
<span style={{color:"grey", fontSize:"15px", textAlign:"center",background:"transparent", padding:"10px 0px"}}>Copyright © 2025 All rights reserved |  zakariayussif@webster.edu</span>
</div>


    </>
    );
}

export default App;