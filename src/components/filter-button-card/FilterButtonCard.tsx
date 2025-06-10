import styles from './FilterButtonCard.module.css'

export interface FilterButtonProps {
    id: number;
    name: string;
    isActive: boolean
    onClick: () => void; // function to run when the button is clicked
  }

export default function FilterButtonCard(props: FilterButtonProps) {
  const buttonClass = props.isActive
    ? styles['filter-button-selected']
    : styles['filter-button'];

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.name}
    </button>
  );
}