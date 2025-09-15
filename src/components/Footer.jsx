import React from "react";

const Footer = () => {

     const navigationLinks = [
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Menu", href: "/menu" },
              { label: "Blog", href: "/blog" },
              { label: "Blog Detail", href: "/blogdetail" },
              { label: "Element", href: "/element" },
              { label: "Contacts", href: "/contact" },
            ];
          
            const usefulLinks = [
              { label: "Registration", href: "#" },
              { label: "Login", href: "#" },
              { label: "Policy", href: "#" },
              { label: "Terms & Conditions", href: "#" },
            ];
          
            const instagramImages = [
              "https://cdn.pixabay.com/photo/2022/08/02/07/30/pizza-7359755_1280.jpg",
              "https://cdn.pixabay.com/photo/2023/04/26/08/09/porridge-7951848_1280.jpg",
              "https://cdn.pixabay.com/photo/2025/03/06/13/17/pasta-9450866_1280.jpg",
              "https://cdn.pixabay.com/photo/2019/07/30/00/59/restaurant-4371735_1280.jpg",
              "https://cdn.pixabay.com/photo/2022/02/12/15/00/biryani-7009109_640.jpg",
              "https://cdn.pixabay.com/photo/2020/12/13/14/36/kabsa-5828416_640.jpg",
            ];
          
   
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold text-warning">
            <img
            src="https://preview.colorlib.com/theme/allfood/assets/img/logo/logo.png"
            alt="logo"
            width="40"
            className="me-2"
          />
              <i className="bi bi-egg-fried me-2"></i>All Food
            </h3>
            <p>Food & Drinks</p>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Navigation</h5>
            <ul className="list-unstyled">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-light text-decoration-none">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="list-unstyled">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-light text-decoration-none">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Instagram Feed</h5>
            <div className="d-flex flex-wrap gap-2">
              {instagramImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Instagram"
                  className="img-fluid rounded"
                  style={{ width: "70px", height: "70px", objectFit: "cover" }}
                />
              ))}
            </div>
          </div>
        </div>
        <hr className="border-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} All Food | Designed with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
