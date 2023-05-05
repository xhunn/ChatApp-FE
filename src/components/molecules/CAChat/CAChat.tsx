
import { Col, Row } from "react-bootstrap";
import CAChatProps from "./CAChat.interface";


const CAChat = (props: CAChatProps) => {
  return <>
    <Row>
      { props.showDetails ? 
        <Col xs={12}>
          <p>{props.info.name}</p>
        </Col> : <></>
      }
      <Col xs={12}>

      </Col>
      { props.showTime && <Col xs={12}> <p>{props.info.time}</p> </Col> }
    </Row>
  </>
}

export default CAChat;