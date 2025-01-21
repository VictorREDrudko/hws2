import s from './Loader.module.css'

export const Loader = () => {
  return (
      <div className={s.loader}>
          <div id={s.fountainG_1} className={s.fountainG}></div>
          <div id={s.fountainG_2} className={s.fountainG}></div>
          <div id={s.fountainG_3} className={s.fountainG}></div>
          <div id={s.fountainG_4} className={s.fountainG}></div>
      </div>
    
  )
}
