import { Button } from "react-bootstrap";
import CAButtonProps from "./CAButton.interface";

const CAButton = (props: CAButtonProps) => {
  
  return <>
    {props.confirmButton && <Button variant="primary" onClick={props.func}>{props.text ? props.text : "Confirm"}</Button>}
    {props.cancelButton && <Button variant="danger" onClick={props.func}>{props.text ? props.text : "Cancel"}</Button>}
    {!props.cancelButton && !props.confirmButton && <Button variant="primary" onClick={props.func}>{props.text ? props.text : "Click"}</Button>}
  </>
}

export default CAButton;