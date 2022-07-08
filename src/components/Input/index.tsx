import styles from './styles.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: Props) => {
  return (
    <input
      {...props}
      className={`${props.className} ${styles.input}`}
      type={props.type || 'text'}
    />
  );
};

export default Input;
