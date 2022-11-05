import { UserCircleIcon, QuestionMarkCircleIcon, CalculatorIcon, FolderOpenIcon, ArchiveIcon, PhoneIcon, MailIcon, PuzzleIcon, OfficeBuildingIcon } from "@heroicons/react/solid";
import Link from "next/link";

const ProjectDashboard = () => {
    return (
        <div className="flex justify-center flex-col">

            <h1 className="text-4xl text-center mt-8">Vogue Italia</h1>


            <div className="my-12">

                <Link href="/"><p className="my-7 pl-14"><PuzzleIcon className="h-6 w-6 mt-6" /> Mood Board</p></Link>
                <Link href="/"><p className="my-7 pl-14"><UserCircleIcon className="h-6 w-6 mt-6" />Contacts</p></Link>
                <Link href="/"><p className="my-7 pl-14"><QuestionMarkCircleIcon className="h-6 w-6 mt-6" /> Requests</p></Link>
                <Link href="/"><p className="my-7 pl-14"><MailIcon className="h-6 w-6 mt-6" /> Email Templates</p></Link>
                <Link href="/"><p className="my-7 pl-14"><PhoneIcon className="h-6 w-6 mt-6" /> Call sheet</p></Link>
                <Link href="/"><p className="my-7 pl-14"> <CalculatorIcon className="h-6 w-6 mt-6" />Budget / Receipts</p></Link>
                <Link href="/"><p className="my-7 pl-14"><FolderOpenIcon className="h-6 w-6 mt-6" /> Files</p></Link>
                <Link href="/"><p className="my-7 pl-14"><OfficeBuildingIcon className="h-6 w-6 mt-6" />Pull Inventory</p></Link>
                <Link href="/"><p className="my-7 pl-14"><ArchiveIcon className="h-6 w-6 mt-6" /> Archive</p></Link>
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label
                            for="exampleFormControlTextarea1"
                            class="form-label inline-block mb-2 text-gray-700"
                        >
                            Notes
                        </label>
                        <textarea
                            class="
        form-control
        block
        w-full
        px-9
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Add your notes..."
                        ></textarea>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectDashboard;
