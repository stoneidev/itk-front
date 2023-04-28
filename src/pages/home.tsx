export default function Home() {
    const products = [
        {
            id: 1,
            name: "장미꽃",
            price: "₩20000 KRW",
            imageSrc: "http://www.insightkorea.co.kr/news/photo/201805/24998_17962_5634.jpg",
            imageDesc: "소중하고 사랑하는 사람에게 장미 한송이 어때요?",
            outOfStock: true
        },
        {
            id: 2,
            name: "장미꽃",
            price: "₩20000 KRW",
            imageSrc: "http://www.insightkorea.co.kr/news/photo/201805/24998_17962_5634.jpg",
            imageDesc: "소중하고 사랑하는 사람에게 장미 한송이 어때요?",
            outOfStock: false
        }
    ]

    return (
        <div className="container-fluid">
            <div className="px-lg-5">
                <div className="row py-5"></div>
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            <div className="bg-white rounded shadow-sm">
                                <div className="card text-bg-dark">
                                    <img src={product.imageSrc}
                                         alt="" className="img-fluid card-img"/>
                                    {
                                        product.outOfStock &&
                                        <div className="card-img-overlay d-flex flex-column">
                                            <div className="mt-auto">
                                                <span className="badge rounded-pill text-bg-light">품절</span>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="p-4">
                                    <h5><a href="#" className="text-dark">{product.name}</a></h5>
                                    <p className="small text-muted mb-0">{product.imageDesc}</p>
                                    <div
                                        className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                        <p className="small mb-0">
                                            <i className="fa fa-picture-o mr-2"></i>
                                            <span className="font-weight-bold">{product.price}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
