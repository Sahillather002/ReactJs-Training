export default function Product(props) {
    return (
        <div className="product-card">
            <img 
                src={props.imageURL} 
                alt="product" 
                height={120} 
                width={120} 
                />
            <div>
            <div className="info-group">
                <h3>{props.title}</h3>
                <p>{props.descr}</p>
            </div>
            </div>
            <div>
                <div className="info-group">
                    <span>Submitted By:</span>
                    <img
                        src = {props.ownerImage}
                        alt = "owner"
                        height={30}
                        width={30}
                    />
                </div>
            </div>
        </div>
    );
}
