import './project.css';
const projects = (props) => {
    const{title, image, description, link} = props;
    return(
        <>
            <div  className={"p_container"}>
                <div className={"image"} data-desc={description}>
               <a href={link} target={"_blank"} rel={"noreferrer"}>
                <img src={image} alt={title} />
               </a>
                </div>
                <h1>{title}</h1>
            </div>
        </>
    )
}
export default projects;