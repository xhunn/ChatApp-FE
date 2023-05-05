export default interface CAChatProps {
  info: {
    name: string;
    message: string;
    time: string
    picture?: string;
  }
  showDetails: boolean;
  showTime?: boolean;

}