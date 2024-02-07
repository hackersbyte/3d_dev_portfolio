import { Link } from "react-router-dom";


const CTA = () => {
  return (
    <section className="cta" >
        <p className="cta-txt">
            Ready to get started? Let's talk about your project. <br className="sm:block hidden "/>
            Let's make it come  alive!
        </p>
        <Link  to="/contact" className="btn btn-primary">
            Contact Me
            </Link>
    </section>
  );
};


export default CTA