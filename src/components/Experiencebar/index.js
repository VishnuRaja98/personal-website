const Expbar = ({ startDate, endDate, org, position, description }) => {
    return(
        <div className='expbar'>
            <div className="expbartitle">
                <div className="leftpart"><strong>{org}</strong>, {position}</div>
                <div className="rightpart"><i>{startDate} - {endDate}</i></div>
            </div>
            <div className="expdescription">
                {description}
            </div>
        </div>
    );
};
export default Expbar;