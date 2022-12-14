import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'

function Search() {
    const [search, setSearch] = useState("")
    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/search/${search}`);
        //console.log('test1');

    }
    return (
        <React.Fragment> <div className='flex flex-row mx-6'><label className="sr-only">Search</label>
            <form onSubmit={handleSearch}>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" onChange={(e) => setSearch(e.target.value)} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-full focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                </div>
            </form>
        </div></React.Fragment>
    )
}

export default Search