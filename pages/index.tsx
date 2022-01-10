import type { NextPage } from 'next'

const Home: NextPage = () => {
    const handleImport = () => {
        alert("Importing from files ...");
    }
    return (
        <div className={"bg-slate-600 h-screen w-screen flex items-center justify-center space-x-4 text-white"}>
            <input className={"p-2 w-1/2 bg-white rounded-lg border border-white focus:border-teal-400 text-slate-700 outline-none"} placeholder='Paste an YGOProdeck URL here ...' />
            <span>or</span>
            <button type='button' onClick={handleImport} className={"rounded-lg bg-teal-700 p-2 rounded-lg border border-teal-400 hover:bg-teal-400"}>
                Import from files
            </button>
        </div>
    )
}

export default Home
