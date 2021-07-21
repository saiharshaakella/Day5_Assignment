import React from 'react'
import Card from './Card'

let CardSection = ()=>{
    return(
        <section className="contact bg-success ">
        <div className="container ">
			<h2 className="text-white">
				We love new friends!
			</h2>
			<div className="row">
			<Card cardImage= {<img
                src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />} cardTitle="First" cardDesc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui corrupti debitis, ipsum possimus aperiam asperiores. Fuga suscipit odio voluptas cum quod sequi commodi ad totam explicabo dolorum, ea, dignissimos velit?"
			buttontxt="Market"/> 
			<Card cardImage={<img
                src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />} cardTitle="Second" cardDesc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui corrupti debitis, ipsum possimus aperiam asperiores. Fuga suscipit odio voluptas cum quod sequi commodi ad totam explicabo dolorum, ea, dignissimos velit?"
			buttontxt="Station"/>
			<Card cardImage={ <img
                src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />} cardTitle="Third" cardDesc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui corrupti debitis, ipsum possimus aperiam asperiores. Fuga suscipit odio voluptas cum quod sequi commodi ad totam explicabo dolorum, ea, dignissimos velit?"
			buttontxt="City"/>
          </div>
        </div>
      </section>
    )
}

export default CardSection
