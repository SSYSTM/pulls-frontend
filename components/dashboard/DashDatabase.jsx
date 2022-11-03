import databaseStyle from "./DashDatabase.module.scss";
import Button from "../buttons/Button";
import DashItem from "./DashItem";


const DashDatabase = () => {
  return (
    <div className="w-full py-4 pt-4 text-center bg-slate-50">
      <h2 className="text-xl">
        Database{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={databaseStyle.pencil}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </h2>
      <div className="mx-auto w-full max-w-md rounded-2xl p-2 ">
        <DashItem name="burberry">
          This is information about this brand
        </DashItem>
        <DashItem name="another brand">information about a new brand</DashItem>{" "}
      </div>
      <div className="flex space-x-4 justify-center ">
        <Button>See More</Button>
      </div>
    </div>
  );
};

export default DashDatabase;
