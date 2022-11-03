import confirmStyles from "./ConfirmRequest.module.scss";

const ConfirmRequest = () => {
  return (
    <div className="boxcontainer">
      <span className={confirmStyles.thankyoutext}>THANK YOU</span>
      <span>You will receive a confirmation within 48hrs</span>
    </div>
  );
};

export default ConfirmRequest;
