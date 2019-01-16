import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <div className="page about">
    <Link className="post__backbutton" to="/">←</Link>
    <h1>About</h1>
    <div className="about_main">
        <div>
          <p>
           Hi, there! Thank you so much for visiting Perfectly Salted. I am so happy you are here. I’m Zoe, the creator of Perfectly Salted. 
           </p>
           <p>
           My journey with baking started way back in the 7th grade when I decided to gift cookies to friends as their birthday present. I would ask them “if you could have any cookie, what kind would you want?” Answers ranged from chocolate chip, to snickerdoodle, to death by chocolate. The next day I would bring in cookies for my friend’s birthday and the word started spreading like wildfire that I was baking cookies for everyone’s birthday. I would go home and bake dozens of cookies a week for friends, classmates, and family. I loved that the simple act of baking cookies provided joy to others. People would often say that I should start a bakery and I would laugh and set that thought aside thinking “oh, wouldn’t that be nice”. 
          </p>
          <p>
            Over the years, baking has continued to serve as an outlet in my life and a way for me to provide a little bit of happiness to others. People continued to ask me about my baking and I would joke and say, “my back-up plan in life is to open a bakery”, never thinking that I could really do such a thing. 
          </p>
          <p>
          Then, I thought… well, why not? 
          </p>
          <p>
            So, here we are. Welcome to my so-called back-up plan. In the day, I work for a local nonprofit supporting children’s health, and by the night you will find me baking up a storm. I can’t wait to share my passion for baking and delicious eats with you. 
          </p>
          <p>
          Dare to get a little salty with me. 
          </p>
        </div>‍
    </div>
    <p>Want to get in touch? </p>
    <Link to="contact">Contact Me!</Link>
    </div>
  </Layout>
)

export default About
