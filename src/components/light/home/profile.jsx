import React from 'react';

function Profile() {
  return (
    <section className="intro-profile md-mb50">
      <div className="row rest">

        <div className="col-lg-12 content main-bg">
          <h1 className='text-center'>
            Hello, I’m <span className="main-color">Muhammad Alfath Aditya</span>, Front-end
            Developer and{' '}
            <span className="bord">
              UX / UI Designer <i></i>
            </span>{' '}
            Based in Jakarta.
          </h1>
          <div className="stauts mt-80">
            <div className="d-flex justify-content-center">
              <div>
                <div className="butn-presv">
                  <a href="/assets/docs/Resume_Muhammad-Alfath-Aditya.pdf" className="butn butn-md butn-bord radius-5 skew">
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
