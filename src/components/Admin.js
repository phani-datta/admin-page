import Stats from "./Stats";
import Table from "./Table";

const Admin = () => {

    return (
        <div className="flex gap-6 bg-[#131d32]">
            <div className="w-80 bg-[#253046] h-screen hidden lg:block">
                <ul className="menu menu-vertical p-4 overflow-y-auto w-80 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><a className="text-white active">Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
            <div className="w-full h-full">
                <Stats />
                <Table />
            </div>
        </div>
    );
};

export default Admin;