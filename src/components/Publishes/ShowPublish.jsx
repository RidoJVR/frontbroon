import '../../../public/css/Publish.css'


function ShowPublish() {
  return (
    <div>
      <div className="blog-card spring-fever">
        <div className="title-content">
          <h3>
            <a href="#">BronwnBost</a>
          </h3>
          <div className="intro">
            {" "}
            <a href="#">El poder en una mordida</a>{" "}
          </div>
        </div>
        <div className="card-info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim...
          <a href="#">
            Read Article<span className="licon icon-arr icon-black"></span>
          </a>
        </div>
        <div className="utility-info">
          <ul className="utility-list">
            <li>
              <span className="licon icon-like"></span>
              <a href="#">2</a>
            </li>
            <li>
              <span className="licon icon-com"></span>
              <a href="#">12</a>
            </li>
            <li>
              <span className="licon icon-dat"></span>03 Octubre 2023
            </li>
          </ul>
        </div>
        <div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
      </div>
    </div>
  );
}

export default ShowPublish;
