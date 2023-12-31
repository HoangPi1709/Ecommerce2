const Footer = () => {
    return (
<div id="footer" className="mt-4 container-fluid border-top ">
    <div id="footer-1" className="my-4 mx-5">
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                <i className="fa-solid fa-car fs-2 pr-2 m-3"></i>
                <div className="d-flex flex-column ">
                    <p className="fw-bold fs-5">GIAO HÀNG TẬN NƠI</p>
                    <p className="fs-6">Miễn phí giao hàng nội thành</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex ">
                <i className="fa-solid fa-arrows-spin fs-2 pr-1 m-3"></i>
                <div className="d-flex flex-column ">
                    <p className="fw-bold fs-5">ĐỔI TRẢ DỄ DÀNG</p>
                    <p className="fs-6">Miễn phí đổi trong 10 ngày</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex ">
                
                <i className="fa-solid fa-check-to-slot fs-2 pr-1 m-3"></i>
                <div className="d-flex flex-column ">
                    <p className="fw-bold fs-5">HÀNG CHÍNH HÃNG</p>
                    <p className="fs-6">Cam kết hàng chính hãng 100%</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex ">
                <i className="fa-solid fa-dollar-sign fs-2 pr-1 m-3"></i>
                <div className="d-flex flex-column ">
                    <p className="fw-bold fs-5">NHẬN HÀNG TRẢ TIỀN
                    </p>
                    <p className="fs-6">Tiền mặt, quẹt thẻ, chuyển khoản
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div id="footer-2">
        <div className="row mx-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="d-flex flex-column ">
                    <p className="fw-bold fs-5">Về chúng tôi</p>
                    <a>
                        <p className="fs-6">Giới thiệu</p>
                    </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="d-flex flex-column ">
                    <p className="fw-bold fs-5">CHÍNH SÁCH</p>
                    <a>
                        <p className="fs-6">Chính sách bảo hành</p>
                        <p className="fs-6">Chính sách thanh toán</p>
                        
                    </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="d-flex flex-column ">
                    <p className="fw-bold fs-5"> TỔNG ĐÀI HỖ TRỢ (MIỄN PHÍ GỌI)</p>
                    <a>
                        <p className="fs-6">Gọi mua: 1800.0000 (8:00 - 21:00)</p>
                        <p className="fs-6">Email: cskh@mac1.com</p>
                    </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="d-flex flex-column ">
                    <p className="fw-bold fs-5">ĐƠN VỊ VẬN CHUYỂN</p>
                    <a>
                        <img src="/src/asset/f-2.png"  alt=""/>
                    </a>
                </div>
            </div>
        </div>


    </div>
    <div id="footer-3" className="border-top d-flex mx-5 justify-content-between">
        <div className="d-flex mt-5 flex-column">
            <p>KẾT NỐI VỚI CHÚNG TÔI</p>
            <nav className="nav nav-pills flex-column flex-sm-row">
                <a className="flex-sm-fill text-sm-center nav-link " aria-current="page" href="#"><i className="fa-brands fa-facebook fs-1 pb-2"></i></a>
                <a className="flex-sm-fill text-sm-center nav-link " href="#"><i className="fa-brands fa-twitter fs-1 pb-2"></i></a>
                <a className="flex-sm-fill text-sm-center nav-link " style={{color:"red"}} href="#"><i className="fa-brands fa-youtube fs-1 pb-2"></i></a>
              </nav>
        </div>
        <div className="my-3">
            <img src="/src/assets/f-2.png"  alt="" />
        </div>
    </div>
</div>

    );
}

export default Footer;
