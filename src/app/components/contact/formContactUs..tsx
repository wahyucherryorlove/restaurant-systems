const FormContactUs = () => {
    return (
        <ul className="flex flex-col gap-y-5">
            <li>
                <input type="text" className="w-full py-3 px-3 text-sm font-['Quicksand'] bg-[#F1EEE7] border-2 border-transparent focus:border-amber-500 outline-none duration-200" placeholder="Your name, sir?"/>
            </li>
            <li>
                <input type="email" className="w-full py-3 px-3 text-sm font-['Quicksand'] bg-[#F1EEE7] border-2 border-transparent focus:border-amber-500 outline-none duration-200" placeholder="Your email, sir?"/>
            </li>
            <li>
                <input type="text" className="w-full py-3 px-3 text-sm font-['Quicksand'] bg-[#F1EEE7] border-2 border-transparent focus:border-amber-500 outline-none duration-200" placeholder="Subject"/>
            </li>
            <li>
                <textarea className="w-full py-3 px-3 text-sm font-['Quicksand'] bg-[#F1EEE7] border-2 border-transparent focus:border-amber-500 outline-none duration-200" placeholder="Comment..."/>
            </li>
            <li>
                <button className="w-full bg-amber-600 py-3 font-['Quicksand'] text-neutral-100 rounded-md hover:bg-amber-500 duration-150">Send</button>
            </li>
        </ul>
    )
}

export { FormContactUs }