
import './blog.scss'

import Bloginfo from "./Bloginfo";
import Blogimg from "./Blogimg";

import blog1 from '../../assets/images/img/blog1.png'
import blog2 from '../../assets/images/img/blog2.png'
import blog3 from '../../assets/images/img/blog3.png'
import blog4 from '../../assets/images/img/blog4.png'


function Blog() {
  return (
    <div className="blog">
      <div className="container">
      <div className="blog__title title orange">Миниатюры</div>
        <div className="blog__boxes">
          <div className="col-6">
            <Blogimg picture={blog1}/>
          </div>
          <div className="col-6">
            <Bloginfo />
          </div>
          <div className="col-6">
            <Bloginfo />
          </div>
          <div className="col-6">
            <Blogimg picture={blog2}/>
          </div>
          <div className="col-6">
            <Blogimg picture={blog3}/>
          </div>
          <div className="col-6">
            <Bloginfo />
          </div>
          <div className="col-6">
            <Bloginfo />
          </div>
          <div className="col-6">
            <Blogimg picture={blog4}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
