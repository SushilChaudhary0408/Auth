const TextInput = ({
    inputChangeHandler,
    inputValue,
    label
}) => {
    return (
        <div className="flex flex-col py-2 relative justify-center">
            <input 
                onChange={inputChangeHandler}
                value={inputValue}
                type="text" placeholder=' ' 
                className="
                    border-[3px]
                    border-slate-500
                    rounded-lg
                    p-3
                    outline-none
                    peer
                " />
            <span
                className='
                    absolute left-3
                text-gray-500 
                transition-all 
                flex
                bg-white
                peer-focus:-translate-y-6
                peer-placeholder-shown:-translate-y-0
                -translate-y-6
                pointer-events-none
                px-1

                peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:text-xs
                text-md
                '
            >{label}</span>
        </div>
    )
}

export default TextInput;