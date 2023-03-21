import middle from "./middlePart.module.css";
export default function Middle() {
  return (
    <div className={middle.seconddiv}>
      <div className={middle.content}>
        <small className={middle.small}>Totally Free</small>
        <h1 className={middle.heading}>
          Lets bring Your <br />
          team together <br />
          in onclick
        </h1>
        <p>
          We help to manage all our task <br />
          in office
        </p>
        <button className={middle.button}>Get Started</button>
        <i className="fa fa-play-circle-o"> How to Use</i>
      </div>
      <div>
        <img
          className={middle.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sl0ek4oHBRd0Zc1Vedwx08z2wgBo97h7Lg&usqp=CAU"
          
        />
      </div>
    </div>
  );
}
