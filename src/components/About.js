import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle={
        color: props.mode === 'dark' ? 'white' : '#576485',
        backgroundColor: props.mode === 'dark' ? '#576485' : 'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ? 'white' : '#576485'
    }
    // const [btntext, setBtnText] = useState('Enalbe Dark Mode')
    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'

    //         })
    //         setBtnText('Enalbe light Mode');
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'

    //         })
    //         setBtnText('Enalbe Dark Mode');
    //     }
    // }
    return (
        <>
            <div className="accordion" style={ {color: props.mode === 'dark' ? 'white' : '#576485'}}>
                <h1 className='my-3'>About Us</h1>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Accordion Item #1</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={myStyle} >
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Accordion Item #2</strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Accordion Item #3</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={myStyle} >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                {/* <div className='accordion my-3'>
               
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
            </div> */}

            </div>
            {/* <div className="form-check form-switch my-3">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
            </div> */}
        </>
    )
}
