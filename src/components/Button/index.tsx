import styles from './styles.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={`${props.className} ${styles.button}`}
      type={props.type || 'submit'}
    >
      {props.children}
    </button>
  );
};

export default Button;
