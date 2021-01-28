import React from "react";

function Footer() {
  return (
    <div>
      <footer className={`text-muted py-5 `}>
        <div className="container d-flex justify-content-center">
          <p>
            This app is created by Irmak Ecem Eris, if you want to use this as
            an inspiration please give credit.
          </p>
        </div>
        <div className="container d-flex justify-content-center">
          <p>
            Are you stuck? <a href="/">Visit the homepage</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
