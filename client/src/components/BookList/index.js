import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";



export function BookList({children}) {
  return (
    <ul className="list-group">{children}</ul>
    );
}

  
  export class BookListItem extends React.Component{

    render(){
     console.log(this.props)
;    return (
      <div className= "m-2 ">
        <Container>
          <Row>
            <Col size="md-2 sm-2">
              <Thumbnail src={this.props.thumbnail} />
            </Col>
            <Col size="md-8 sm-6">
              <h3>{this.props.title}<span><h5>{this.props.authors.join(", ")}</h5></span></h3>
              <p>
                {this.props.synopsis}
              </p>
              <a
                target="_blank"
                href={this.props.link}
                rel="noopener noreferrer"
              >
                See book listing
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
    }
  }