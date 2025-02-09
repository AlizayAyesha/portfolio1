import React from 'react'


const Counter = (props) => {

    const counter = [
        {
          heading:"Avarage Rating",
          data:"95%",
        },
        {
          heading:"Project Complete",
          data:"100 +",
        },
        {
          heading:"Client Satisfaction",
          data:"90%",
        },
        {
          heading:"Award Winning",
          data:"10+",
        },
    ]

    return(
      <div className="tp-counter-area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="tp-counter-grids">
                          {counter.map((count, cnt) => (
                              <div className="grid" key={cnt}>
                                  <div>
                                      <h2>{count.data}</h2>
                                  </div>
                                  <p>{count.heading}</p>
                              </div>
                          ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Counter;