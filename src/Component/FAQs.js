import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

function FAQs({ question, answer, answer2, key }) {
    const [show, setshow] = useState(false)
    return (
        <div className='col-lg-6'>
            <Fade cascade damping={0.3} triggerOnce={true}>
            <div className=' faq-div1 mt-4'>
                <div className='d-flex align-items-center faq-question-div1'>
                    <h1 className='faq-text1' onClick={() => setshow(!show)}>{question}</h1>
                    <svg onClick={() => setshow(!show)} className='faqs-plus-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M0 12L24 12" stroke="black" stroke-width="1.5" />

                        <path className={`${show ? "d-none" : "d-block"}`} d="M12 0L12 24" stroke="black" stroke-width="1.5" />
                    </svg>
                </div>
                <div className=' '>
                    {
                        show && <div className="faq-answer-div1">
                            <p className="faq-text2">{answer}</p>
                            <p className="faq-text2">{answer2}</p>
                        </div>
                    }
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default FAQs
