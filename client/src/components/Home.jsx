import React from 'react';
import image0 from '../images/imagep.png';
import image1 from '../images/imagen.png';
import sher from '../images/imagepink.png';
import watsap from '../images/watsap.png';
import '../App.css';

function Home() {
  const watsapp = () => {
    alert('you can call us 0523215566');
  }
  
  return (
    <div style={{ backgroundColor: "gray" }}>
      {/* <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <img src={image0} className="img-fluid" alt="Cover Image" style={{ height: '100%', width: '100%', objectFit: 'cover',opacity: 0.5 }} />
      </div> */}
      <nav className="navbar fixed-bottom bg-body-tertiary">
        <div className="container-fluid">
        <img onClick={watsapp} style={{ height: '5%', width: '5%' }} src={watsap} alt="WhatsApp Button" />
         </div>
      </nav>

      <br />
  
<div id="parallax-world-of-ugg">
  
<section>
  <div class="title">
    <h3>welcome to</h3>
    <h1>batsi&avi fitness</h1>
  </div>
</section>

<section>
    <div style={{ backgroundImage: `url(${sher})` }} class="parallax-one">
      <h2>SOUTHERN CALIFORNIA</h2>
    </div>
</section>

<section>
  <div id="s1"class="block">
    <p><span class="first-character sc">I</span>In a world where many challenges and looming obstacles, one thing remains - the power within you to rise above, push boundaries and conquer your limitations. Welcome to our premier gym, where we invite you to embark on a transformative journey towards a stronger, healthier and more empowered version of yourself.Our state-of-the-art facilities are tailored to cater for all fitness levels and goals. Whether you're a novice taking your first steps towards a healthier lifestyle or a seasoned athlete aiming for new highs of performance, our expert trainers and range of equipment are here to support you every step of the way.
However, our gym goes beyond just being a place to lift weights or run on treadmills. It is a community, a family of like-minded people who share a common passion for growth, health and vitality. Here you will find encouragement, motivation and camaraderie as you sweat, struggle and win together.As you work towards your fitness goals within our walls, you will realize that the transformations you undergo extend far beyond the physical realm. Self-confidence blossoms, self-discipline strengthens and resilience deepens with each training session. The obstacles you face in the gym serve as stepping stones to overcome obstacles in all areas of your life.</p>
    <p class="line-break margin-top-10"></p>
  </div>
</section>

<section>
  <div style={{ backgroundImage: `url(${image1})` }}class="parallax-two">
    <h2>NEW YORK</h2>
  </div>
</section>

<section>
  <div class="block">
    <p><span class="first-character ny">B</span> desire for premium casua.</p>
    <p class="line-break margin-top-10"></p>
    <p class="margin-top-10">Fueledon wations on nd men aat started as a niche item, UGG sheepskin boo.</p>
  </div>
</section>


<section>
  <div style={{ backgroundImage: `url(${image0})` }} className="parallax-three">
    <h2>ENCHANTED FOREST</h2>
  </div>
</section>


<section>
  <div class="block">
    <p><span class="first-character atw">W</span>hen the New ar UGG boots, slippers, and shoes.</p>
    <p class="line-break margin-top-10"></p>
    <p class="margin-top-10">In 2011, UGG will .</p>
  </div>
</section>
  
</div>
    </div>
  );
};

export default Home;
