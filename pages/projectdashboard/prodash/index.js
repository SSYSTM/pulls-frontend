const ProjectDashboard = () => {
    return (
        <div className="flex justify-center flex-col">
            <h1 className="text-xl text-center">Vogue Italia</h1>

            <div className="my-12">
                <p className="my-7">Mood Board</p>
                <p className="my-7">Contacts</p>
                <p className="my-7">Requests</p>
                <p className="my-7">Email Templates</p>
                <p className="my-7">Call sheet</p>
                <p className="my-7">Budget / Receipts</p>
                <p className="my-7">Files</p>
                <p className="my-7">Pull Inventory</p>
                <p className="my-7">Archive</p>
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
        </div>
    );
};

export default ProjectDashboard;
