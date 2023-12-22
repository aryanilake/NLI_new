import React from 'react'
import gs from "../assets/gs.jpg"

function Projectscontent({label}) {
  return (
    <div>
      <div className="img h-max">
      <div className="mainimg h-[70vh] overflow-hidden  rounded-3xl ">
            <img
              src={gs}
              className="w-full  transform hover:scale-110 transition-transform duration-300 ease-in-out"
              alt="gs"
              srcset=""
            />
          </div>
      </div>

      <div className="text m-5">
        <p className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut eveniet in molestias nesciunt magni quia aperiam voluptatem, iste voluptate similique quidem totam beatae maiores ab ullam dolorum alias deleniti illum nobis reiciendis! Nobis inventore molestias autem? Asperiores possimus corrupti ratione itaque tenetur porro exercitationem, cumque natus et debitis nesciunt quidem! Voluptatem, a ipsam nihil, perspiciatis quia repellat facilis voluptatibus, quae fugit iste consectetur qui sunt incidunt numquam corporis.</p>
      </div>
    </div>
  )
}

export default Projectscontent
