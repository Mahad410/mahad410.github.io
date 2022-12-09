import './certificate.css';
import Certificates from "./../Components/Certificates.jsx";
import logos from'./../data_certificates.js';
function Cert(){
    return(
<>
    <div className={'pro_container'}>
        {
            logos.map((data)=>{
                return <Certificates image={data.img} url={data.url} />
            })
        }
    </div>
</>
    )
}
export default Cert;