import "./intro.css"
import Me from "../../img/Me.jpg"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper"> 

                    <h2 className="i-intro">Hi! My name is</h2>
                    <h1 className="i-name"> Raza Shah</h1>
                    <div className="i-title">
                    <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">UI/UX designer</div>
                    <div className="i-title-item">Writer</div>
                    <div className="i-title-item">Photographer</div>
                    <div className="i-title-item">Content creater</div>
                    </div>
                    </div>
                        <div className="i-desc">
                           <h3> I'm the student of software engineering .I am a full stack developer
                             and now i am working on my fyp
                              that is based on MERN stack technology</h3>
                        </div>
                    </div>
                  </div>
             <div className="i-right">
                 <img src={Me} alt="" className="i-img" />
             </div>
        </div>
    )
}

export default Intro
