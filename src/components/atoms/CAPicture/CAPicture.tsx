import { Container, Image } from "react-bootstrap";
import CAPictureProps from "./CAPicture.interface";

const CAPicture = (props: CAPictureProps) => {
  return <>
    <Container>
      { props.size === "small" && <Image width={50} src={props.image} fluid rounded /> }
      { props.size === "medium" && <Image width={100} src={props.image} fluid rounded /> }
      { props.size === "large" && <Image width={200} src={props.image} fluid rounded /> }
    </Container>  
  </>
}

export default CAPicture;