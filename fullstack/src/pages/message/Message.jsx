import React from 'react';
import './Message.scss'
import { Link } from 'react-router-dom';


const Message = () => {

  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to = "/messages">MESSAGES</Link> - JOHN DOE -
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ducimus officia illum quidem, repudiandae alias. Illo iste alias commodi nemo ullam amet. Iste, dignissimos.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ducimus officia illum quidem, repudiandae alias. Illo iste alias commodi nemo ullam amet. Iste, dignissimos.
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ducimus officia illum quidem, repudiandae alias. Illo iste alias commodi nemo ullam amet. Iste, dignissimos.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ducimus officia illum quidem, repudiandae alias. Illo iste alias commodi nemo ullam amet. Iste, dignissimos.
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ducimus officia illum quidem, repudiandae alias. Illo iste alias commodi nemo ullam amet. Iste, dignissimos.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ducimus officia illum quidem, repudiandae alias. Illo iste alias commodi nemo ullam amet. Iste, dignissimos.
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ducimus officia illum quidem, repudiandae alias. Illo iste alias commodi nemo ullam amet. Iste, dignissimos.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ducimus officia illum quidem, repudiandae alias. Illo iste alias commodi nemo ullam amet. Iste, dignissimos.
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ducimus officia illum quidem, repudiandae alias. Illo iste alias commodi nemo ullam amet. Iste, dignissimos.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ducimus officia illum quidem, repudiandae alias. Illo iste alias commodi nemo ullam amet. Iste, dignissimos.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;