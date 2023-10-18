const DataInput = () => {
    return (
        <ul className="grid grid-cols-3 gap-x-4 gap-y-7">
            <li className="flex flex-col justify-center items-center gap-y-3">
                <label htmlFor="" className="text-sm font-['Quicksand'] text-normal after:content-['*'] after:text-red-400 after:ml-1">DATE</label>
                <input type="date" className="border-2 w-full py-3 text-center border-transparent bg-neutral-100 focus:border-amber-400 outline-none duration-200 text-sm" />
            </li>
            <li className="flex flex-col justify-center items-center gap-y-3">
                <label htmlFor="" className="text-sm font-['Quicksand'] text-normal after:content-['*'] after:text-red-400 after:ml-1">TIME</label>
                <input type="time" className="border-2 w-full py-3 text-center border-transparent bg-neutral-100 focus:border-amber-400 outline-none duration-200 text-sm" />
            </li>
            <li className="flex flex-col justify-center items-center gap-y-3">
                <label htmlFor="" className="text-sm font-['Quicksand'] text-normal after:content-['*'] after:text-red-400 after:ml-1">GUESTS</label>
                <input type="number" className="border-2 w-full py-3 text-center border-transparent bg-neutral-100 focus:border-amber-400 outline-none duration-200 text-sm" min={1} />
            </li>
            <li className="flex flex-col justify-center items-center gap-y-3">
                <label htmlFor="" className="text-sm font-['Quicksand'] text-normal after:content-['*'] after:text-red-400 after:ml-1">NAME</label>
                <input type="text" className="border-2 w-full py-3 text-center border-transparent bg-neutral-100 focus:border-amber-400 outline-none duration-200 text-sm" placeholder="You name, sir?" />
            </li>
            <li className="flex flex-col justify-center items-center gap-y-3">
                <label htmlFor="" className="text-sm font-['Quicksand'] text-normal after:content-['*'] after:text-red-400 after:ml-1">EMAIL</label>
                <input type="email" className="border-2 w-full py-3 text-center border-transparent bg-neutral-100 focus:border-amber-400 outline-none duration-200 text-sm" placeholder="restaurant@example.com" />
            </li>
            <li className="flex flex-col justify-center items-center gap-y-3">
                <label htmlFor="" className="text-sm font-['Quicksand'] text-normal after:content-['*'] after:text-red-400 after:ml-1">PHONE</label>
                <input type="number" className="border-2 w-full py-3 text-center border-transparent bg-neutral-100 focus:border-amber-400 outline-none duration-200 text-sm" min={0} />
            </li>
        </ul>
    )
}

export { DataInput }