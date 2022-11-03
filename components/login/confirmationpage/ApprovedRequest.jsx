import approvedStyles from "./ApprovedRequest.module.scss";
import Button from "../../buttons/Button";
import Link from "next/link";

const ApprovedRequest = () => {
  return (
    <div className="boxcontainer">
      <div className={approvedStyles.container}>
      <div className={approvedStyles.textcontainer}>
        <span className={approvedStyles.approvedtext}>
          YOU HAVE BEEN APPROVED!
        </span>
        <span className={approvedStyles.smalltext}>
          Please follow the following steps to finish setting up your account
        </span>
      </div>
      <Button className={approvedStyles.button}>
        <Link href="/confirmeduser/basicinfo">Next</Link>
      </Button>
    </div>
   </div>
  );
};

export default ApprovedRequest;
