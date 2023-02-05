const Projectbar = ({ date, title, position, description }) => {
    return(
        <div className='expbar'>
            <div className="expbartitle">
                <div className="leftpart"><strong>{title}</strong></div>
                <div className="rightpart"><i>{date}</i></div>
            </div>
            <div className="expdescription">
                {description}
            </div>
        </div>
    );
};
export default Projectbar;