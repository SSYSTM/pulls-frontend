import DashDatabase from "../../components/dashboard/DashDatabase";
import Forum from "../../components/dashboard/Forum";
import Projects from "../../components/dashboard/Projects";
import dashboardStyle from "./dashboard.module.scss";

function DashBoard() {
  return (
    <div>
    {/* make this a component */}
      <header className="bg-white shadow">
        <div className=" mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl tracking-tight font-bold text-gray-900 text-center">
            Dashboard
          </h1>
        </div>
      </header>
      <div className="grid grid-cols-2 gap-4 mt-6 ">
        <div className="shadow-md mx-4 bg-slate-50">
          <Projects />
        </div>
        <div className="shadow-md mx-4  bg-slate-50">
          <DashDatabase />
        </div>
      </div>

      <div className="mt-6">
        <Forum />
      </div>
    </div>
  );
}

export default DashBoard;
