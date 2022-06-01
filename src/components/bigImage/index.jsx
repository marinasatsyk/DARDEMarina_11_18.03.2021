function BigImage({ imgPath, classN, text }) {
    return (
        <div className={`wrapImage ${classN}`}>
            <img className="cover" src={imgPath} alt="paysage" />
            <span className="slogan">{text}</span>
        </div>
    );
}

export default BigImage;
