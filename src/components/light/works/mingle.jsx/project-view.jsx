import React from 'react';
import data from '@/ldata/home/singlework.json';

function ProjectMingle() {
  // Assuming you want to render the first item from your JSON data
  const projectData = data[9];

  return (
    <section className="sec-box project section-padding radius-15">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="img mb-80">
            <img
              src={projectData.images}
              alt=""
              className="radius-5"
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="cont md-mb50">
                <h3 className="mb-15 fw-500">{projectData.title}</h3>
                <p>{projectData.description}</p>
                <div className="mt-30">
                  <ul className="rest list-arrow mt-50">
                    {projectData.subdescription}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info sub-bg" id="sticky_item">
                <ul>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="fas fa-list-ul mr-10"></i> Categories :
                    </span>
                    <p>{projectData.categories}</p>
                  </li>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="far fa-user mr-10"></i> Client :
                    </span>
                    <p>{projectData.client}</p>
                  </li>
                  <li>
                    <span className="sub-title">
                      <i className="fas fa-globe mr-10"></i> Link :
                    </span>
                    <span className='flex'>  
                    <a href="https://www.figma.com/file/1uTs0oenBb6ij7YfeAaq8y/Mingle?type=design&node-id=0%3A1&mode=design&t=QXGBW3iWH1PCPDAr-1">Mingle AI</a>
                    </span>
                    {/* <p>{projectData.website}</p> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="imgs mt-80">
        {/* Additional images section */}
      </div>
      <div className="next-prev">
        {/* Next/Previous project navigation */}
      </div>
    </section>
  );
}

export default ProjectMingle;
