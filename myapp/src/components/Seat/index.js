
// import React from "react";

// const Seat = ({ seatNumber, type, status, onClick }) => {
//   return (
//     <div className={`seat1 ${status}`} onClick={onClick}>
//       {seatNumber} ({type})
//     </div>
//   );
// };

// export default Seat;

import React from "react";
import "./index.css";

function Seat() {
  return (
    <>
      <div className="movie-container">
        <select>
          <option value={470}>Ticket Type</option>
          <option value={470}>Premium</option>
          <option value={450}>Excecutive</option>
          <option value={420}>Normal</option>
        </select>
      </div>
      <ul className="showcase">
        <li>
          <div className="seat1"></div>
          <small>Available</small>
        </li>
        <li>
          <div className="seat1 selected"></div>
          <small>Available</small>
        </li>
        <li>
          <div className="seat1 sold"></div>
          <small>Sold</small>
        </li>
      </ul>
      <div className="container">
        
       
          <h4 className="premium-cost">PREMIUM-Rs. 470</h4>
          <hr />
          <p6 className="serial-row">K</p6>
          <div className="row">
            <div className="seat">27</div>
            <div className="seat sold">26</div>
            <div className="seat">25</div>
            <div className="seat">24</div>
            <div className="seat sold">23</div>
            <div className="seat">22</div>
            <div className="seat">21</div>
            <div className="seat">20</div>
            <div className="seat">19</div>
            <div className="seat sold">18</div>
            <div className="seat">17</div>
            <div className="seat">16</div>
            <div className="seat sold">12</div>
            <div className="seat">15</div>
            <div className="seat">14</div>
            <div className="seat sold">13</div>
            <div className="seat">11</div>
            <div className="seat">11</div>
            <div className="seat">10</div>
            <div className="seat sold">9</div>
            <div className="seat">9</div>
            <div className="seat">8</div>
            <div className="seat">7</div>
            <div className="seat sold">6</div>
            <div className="seat">5</div>
            <div className="seat">4</div>
            <div className="seat">3</div>
            <div className="seat sold">2</div>
            <div className="seat">1</div>
          </div>
        
        
        <div className="row">
          <div className="seat1">25</div>
          <div className="seat1">24</div>
          <div className="seat1 sold">23</div>
          <div className="seat1">22</div>
          <div className="seat1">21</div>
          <div className="seat1">20</div>
          <div className="seat1">19</div>
          <div className="seat1 sold">18</div>
          <div className="seat1">17</div>
          <div className="seat1">16</div>
          <div className="seat1 sold">12</div>
          <div className="seat1">15</div>
          <div className="seat1">14</div>
          <div className="seat1 sold">13</div>
          <div className="seat1">11</div>
          <div className="seat1">11</div>
          <div className="seat1">10</div>
          <div className="seat1 sold">9</div>
          <div className="seat1">9</div>
          <div className="seat1">8</div>
          <div className="seat1">7</div>
          <div className="seat1 sold">6</div>
          <div className="seat1">5</div>
          <div className="seat1">4</div>
          <div className="seat1">3</div>
          <div className="seat1 sold">2</div>
          <div className="seat1">1</div>
        </div>
        
        <div className="row">
          <div className="seat1">25</div>
          <div className="seat1">24</div>
          <div className="seat1 sold">23</div>
          <div className="seat1">22</div>
          <div className="seat1">21</div>
          <div className="seat1">20</div>
          <div className="seat1">19</div>
          <div className="seat1 sold">18</div>
          <div className="seat1">17</div>
          <div className="seat1">16</div>
          <div className="seat1 sold">12</div>
          <div className="seat1">15</div>
          <div className="seat1">14</div>
          <div className="seat1 sold">13</div>
          <div className="seat1">11</div>
          <div className="seat1">11</div>
          <div className="seat1">10</div>
          <div className="seat1 sold">9</div>
          <div className="seat1">9</div>
          <div className="seat1">8</div>
          <div className="seat1">7</div>
          <div className="seat1 sold">6</div>
          <div className="seat1">5</div>
          <div className="seat1">4</div>
          <div className="seat1">3</div>
          <div className="seat1 sold">2</div>
          <div className="seat1">1</div>
        </div>
        

        
        <h4 className="premium-cost">EXECUTIVE-Rs. 450</h4>
          <hr />
          <p6 className="serial-row">K</p6>
          <div className="row">
            <div className="seat">27</div>
            <div className="seat sold">26</div>
            <div className="seat">25</div>
            <div className="seat">24</div>
            <div className="seat sold">23</div>
            <div className="seat">22</div>
            <div className="seat">21</div>
            <div className="seat">20</div>
            <div className="seat">19</div>
            <div className="seat sold">18</div>
            <div className="seat">17</div>
            <div className="seat">16</div>
            <div className="seat sold">12</div>
            <div className="seat">15</div>
            <div className="seat">14</div>
            <div className="seat sold">13</div>
            <div className="seat">11</div>
            <div className="seat">11</div>
            <div className="seat">10</div>
            <div className="seat sold">9</div>
            <div className="seat">9</div>
            <div className="seat">8</div>
            <div className="seat">7</div>
            <div className="seat sold">6</div>
            <div className="seat">5</div>
            <div className="seat">4</div>
            <div className="seat">3</div>
            <div className="seat sold">2</div>
            <div className="seat">1</div>
          </div>
        
        
        <div className="row">
          <div className="seat1">25</div>
          <div className="seat1">24</div>
          <div className="seat1 sold">23</div>
          <div className="seat1">22</div>
          <div className="seat1">21</div>
          <div className="seat1">20</div>
          <div className="seat1">19</div>
          <div className="seat1 sold">18</div>
          <div className="seat1">17</div>
          <div className="seat1">16</div>
          <div className="seat1 sold">12</div>
          <div className="seat1">15</div>
          <div className="seat1">14</div>
          <div className="seat1 sold">13</div>
          <div className="seat1">11</div>
          <div className="seat1">11</div>
          <div className="seat1">10</div>
          <div className="seat1 sold">9</div>
          <div className="seat1">9</div>
          <div className="seat1">8</div>
          <div className="seat1">7</div>
          <div className="seat1 sold">6</div>
          <div className="seat1">5</div>
          <div className="seat1">4</div>
          <div className="seat1">3</div>
          <div className="seat1 sold">2</div>
          <div className="seat1">1</div>
        </div>
        
        <div className="row">
          <div className="seat1">25</div>
          <div className="seat1">24</div>
          <div className="seat1 sold">23</div>
          <div className="seat1">22</div>
          <div className="seat1">21</div>
          <div className="seat1">20</div>
          <div className="seat1">19</div>
          <div className="seat1 sold">18</div>
          <div className="seat1">17</div>
          <div className="seat1">16</div>
          <div className="seat1 sold">12</div>
          <div className="seat1">15</div>
          <div className="seat1">14</div>
          <div className="seat1 sold">13</div>
          <div className="seat1">11</div>
          <div className="seat1">11</div>
          <div className="seat1">10</div>
          <div className="seat1 sold">9</div>
          <div className="seat1">9</div>
          <div className="seat1">8</div>
          <div className="seat1">7</div>
          <div className="seat1 sold">6</div>
          <div className="seat1">5</div>
          <div className="seat1">4</div>
          <div className="seat1">3</div>
          <div className="seat1 sold">2</div>
          <div className="seat1">1</div>
        </div>


        
        <h4 className="premium-cost">NORMAL-Rs. 420</h4>
          <hr />
          <p6 className="serial-row">K</p6>
          <div className="row">
            <div className="seat">27</div>
            <div className="seat sold">26</div>
            <div className="seat">25</div>
            <div className="seat">24</div>
            <div className="seat sold">23</div>
            <div className="seat">22</div>
            <div className="seat">21</div>
            <div className="seat">20</div>
            <div className="seat">19</div>
            <div className="seat sold">18</div>
            <div className="seat">17</div>
            <div className="seat">16</div>
            <div className="seat sold">12</div>
            <div className="seat">15</div>
            <div className="seat">14</div>
            <div className="seat sold">13</div>
            <div className="seat">11</div>
            <div className="seat">11</div>
            <div className="seat">10</div>
            <div className="seat sold">9</div>
            <div className="seat">9</div>
            <div className="seat">8</div>
            <div className="seat">7</div>
            <div className="seat sold">6</div>
            <div className="seat">5</div>
            <div className="seat">4</div>
            <div className="seat">3</div>
            <div className="seat sold">2</div>
            <div className="seat">1</div>
          </div>
        
        
        <div className="row">
          <div className="seat1">25</div>
          <div className="seat1">24</div>
          <div className="seat1 sold">23</div>
          <div className="seat1">22</div>
          <div className="seat1">21</div>
          <div className="seat1">20</div>
          <div className="seat1">19</div>
          <div className="seat1 sold">18</div>
          <div className="seat1">17</div>
          <div className="seat1">16</div>
          <div className="seat1 sold">12</div>
          <div className="seat1">15</div>
          <div className="seat1">14</div>
          <div className="seat1 sold">13</div>
          <div className="seat1">11</div>
          <div className="seat1">11</div>
          <div className="seat1">10</div>
          <div className="seat1 sold">9</div>
          <div className="seat1">9</div>
          <div className="seat1">8</div>
          <div className="seat1">7</div>
          <div className="seat1 sold">6</div>
          <div className="seat1">5</div>
          <div className="seat1">4</div>
          <div className="seat1">3</div>
          <div className="seat1 sold">2</div>
          <div className="seat1">1</div>
        </div>
        
        <div className="row">
          <div className="seat1">25</div>
          <div className="seat1">24</div>
          <div className="seat1 sold">23</div>
          <div className="seat1">22</div>
          <div className="seat1">21</div>
          <div className="seat1">20</div>
          <div className="seat1">19</div>
          <div className="seat1 sold">18</div>
          <div className="seat1">17</div>
          <div className="seat1">16</div>
          <div className="seat1 sold">12</div>
          <div className="seat1">15</div>
          <div className="seat1">14</div>
          <div className="seat1 sold">13</div>
          <div className="seat1">11</div>
          <div className="seat1">11</div>
          <div className="seat1">10</div>
          <div className="seat1 sold">9</div>
          <div className="seat1">9</div>
          <div className="seat1">8</div>
          <div className="seat1">7</div>
          <div className="seat1 sold">6</div>
          <div className="seat1">5</div>
          <div className="seat1">4</div>
          <div className="seat1">3</div>
          <div className="seat1 sold">2</div>
          <div className="seat1">1</div>
        </div>
        <div className="screen"></div>
      </div>
      
      <button className="text">
        Pay Rs.
        <span id="count">0</span>
      </button>
    </>
  );
}

export default Seat;
