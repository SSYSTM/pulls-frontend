import { UserCircleIcon, QuestionMarkCircleIcon, CalculatorIcon, FolderOpenIcon, ArchiveIcon, PhoneIcon, MailIcon, PuzzleIcon, OfficeBuildingIcon } from "@heroicons/react/solid";
import Link from "next/link";

const ProjectDashboard = () => {
    return (
        <>
            <div>
                <h1 className="text-4xl text-center mt-8 underline">Vogue Italia</h1>
            </div>
            <div className="flex flex-row">
                <div className="my-12 ">

                    <Link href="/"><p className="my-7 pl-14 cursor-pointer"><PuzzleIcon className="h-6 w-6 mt-6" /> Mood Board</p></Link>
                    <Link href="/"><p className="my-7 pl-14 cursor-pointer"><UserCircleIcon className="h-6 w-6 mt-6" />Contacts</p></Link>
                    <Link href="/"><p className="my-7 pl-14 cursor-pointer"><QuestionMarkCircleIcon className="h-6 w-6 mt-6" /> Requests</p></Link>
                    <Link href="/"><p className="my-7 pl-14 cursor-pointer"><MailIcon className="h-6 w-6 mt-6" /> Email Templates</p></Link>
                    <Link href="/"><p className="my-7 pl-14 cursor-pointer"><PhoneIcon className="h-6 w-6 mt-6" /> Call sheet</p></Link>
                    <Link href="/"><p className="my-7 pl-14 cursor-pointer"> <CalculatorIcon className="h-6 w-6 mt-6" />Budget / Receipts</p></Link>
                    <Link href="/"><p className="my-7 pl-14 cursor-pointer"><FolderOpenIcon className="h-6 w-6 mt-6" /> Files</p></Link>
                    <Link href="/"><p className="my-7 pl-14 cursor-pointer"><OfficeBuildingIcon className="h-6 w-6 mt-6" />Pull Inventory</p></Link>
                    <Link href="/"><p className="my-7 pl-14 cursor-pointer"><ArchiveIcon className="h-6 w-6 mt-6" /> Archive</p></Link>
                </div>
            </div>


        </>
    );
};

export default ProjectDashboard;
