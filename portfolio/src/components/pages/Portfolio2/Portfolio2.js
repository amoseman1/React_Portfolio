import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

function Portfolio2() {
    return (
        <Jumbotron>
            <Image src="holder.js/100px250" fluid />
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
  </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>

    )
}

export default Portfolio2
