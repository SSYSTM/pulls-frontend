import formInputStyle from "./Forminput.module.scss"

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className={formInputStyle.group}>
      <input className={formInputStyle.forminput} {...otherProps}></input>

      {label && <label className={formInputStyle.labelstyle}>{label}</label>}
    </div>
  );
};

export default FormInput;
