import './project.css';
import {Link} from "react-router-dom";
const Certificates = (props) => {
    const{name, image,url} = props;
    return(
        <>
            <div  className={"p_container"}>
                <div className={"cert_logo"}>
                        <img src={image} alt={name} />
                </div>
                <Link to={url}>  <button className="btn">
                    Show All Certificates
                </button>
                </Link>
            </div>
        </>
    )
}

export default Certificates;