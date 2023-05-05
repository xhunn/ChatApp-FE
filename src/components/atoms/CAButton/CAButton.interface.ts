export default interface CAButtonProps {
  size: "small" | "medium" | "large";
  func: () => any;
  confirmButton?: boolean;
  cancelButton?: boolean;
  text?: string;
}