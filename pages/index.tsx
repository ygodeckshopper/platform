import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import isValidUrl from '../utils/isValidUrl'
import isValidDeck from '../utils/isValidDeck'

const Home: NextPage = () => {
    const [file, setFile] = useState<any>(null);
    const [url, setUrl] = useState("");
    const [errorText, setErrorText] = useState("");
    const isButtonDisabled = !url && (!file || !file?.name.endsWith(".ydk"));
    const handleImport = (event: any) => { setFile(event?.target.files[0]) }
    const handleUrlChange = (event: any) => { setUrl(event.target.value) }
    const handleFileSubmit = (file: any) => {
        if (file?.name.endsWith(".ydk")) {
            const fileReader = new FileReader();
            const handleFileRead = (e: any) => {
                if (isValidDeck(e.target.result)) {
                    Axios.get("/api/deck?f=" + Buffer.from(e.target.result).toString('base64'))
                        .then((res) => {
                            res.status !== 200 ?
                                setErrorText("An error occured while trying to read the file. Make sure it is a .ydk file.") :
                                console.log(res)
                        }).catch((err) => setErrorText(err.message));
                } else {
                    setErrorText("Invalid deck file");
                }
            }
            fileReader.onloadend = handleFileRead;
            fileReader.readAsText(file);
        } else {
            setErrorText("Please use a .ydk file.")
        }
    }
    const handleUrlSubmit = (url :string) => {
        if (isValidUrl(url)) {
            Axios.get("/api/deck?u=" + Buffer.from(url).toString('base64'))
                .then((res) => console.log(res))
                .catch((err) => setErrorText(err.message));
        } else { setErrorText("Please enter a valid URL.") }
    }
    const handleSubmit = () => file ? handleFileSubmit(file) : handleUrlSubmit(url)

    useEffect(() => {
        !url && file && !file?.name.endsWith(".ydk") ? setErrorText("Please use an .ydk file.") : setErrorText("");
    }, [file, setErrorText, url]);

    return (
        <div
            className={'bg-slate-700 h-screen w-screen flex flex-col items-center justify-center text-white space-y-8'}>
            <div className={"flex w-full items-center justify-center space-x-4"}>
                <input
                    className={'p-2 w-1/2 bg-white rounded-lg border border-white focus:border-teal-400 text-slate-700 outline-none'}
                    placeholder="Paste an YGOProdeck URL here ..."
                    onChange={handleUrlChange}
                />
                <span>or</span>
                <input
                    type="file"
                    onChange={handleImport}
                />
            </div>
            {errorText && <span className={"text-center text-red-600"}>{errorText}</span>}
            <button
                type={"button"}
                onClick={handleSubmit}
                className={"bg-teal-700 border border-teal-400 hover:bg-teal-400 disabled:bg-teal-700 disabled:cursor-default p-2 rounded-lg"}
                disabled={isButtonDisabled}
            >
                Find my deck
            </button>
        </div>
    )
}

export default Home
