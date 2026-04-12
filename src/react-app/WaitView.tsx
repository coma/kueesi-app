import style from './WaitView.module.css';

export function WaitView() {
  return (
    <div className={style.layout} aria-busy="true" />
  );
}
