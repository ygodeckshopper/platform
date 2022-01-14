import type { NextPage } from 'next'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import isValidDeck from '../utils/isValidDeck'
import isValidUrl from '../utils/isValidUrl'

const Home: NextPage = () => {
    const [file, setFile] = useState<any>(null);
    const [url, setUrl] = useState("");
    const [errorText, setErrorText] = useState("");
    const isButtonDisabled = (!url || !isValidUrl(url)) && (!file || !file?.name.endsWith(".ydk"));
    const handleImport = (event: any) => { setFile(event?.target.files[0]) }
    const handleUrlChange = (event: any) => { setUrl(event.target.value) }
    const handleEnterKey = (event: any) => event.keyCode === 13 && handleSubmit();

    const handleFileSubmit = (file: any) => {
        const fileReader = new FileReader();
        const handleFileRead = (e: any) => {
            if (isValidDeck(e.target.result)) {
                Router.push({
                    pathname: "/deck",
                    query: {f: Buffer.from(e.target.result).toString('base64')}
                });
            } else {
                setErrorText("Invalid deck file");
            }
        }
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    }

    const handleUrlSubmit = (url :string) => {
        if (isValidUrl(url)) {
            Router.push({
                pathname: "/deck",
                query: {u: Buffer.from(url).toString('base64')}
            });
        } else { setErrorText("Please enter a valid URL.") }
    }
    const handleSubmit = () => file ? handleFileSubmit(file) : handleUrlSubmit(url)


    useEffect(() => {
        if (url && !isValidUrl(url) && file && !file?.name.endsWith(".ydk")) {
            setErrorText("Please use a valid URL or a .ydk file.");
        } else if (!url && file && !file?.name.endsWith(".ydk")) {
            setErrorText("Please use a .ydk file.");
        } else if (!file && url && !isValidUrl(url)) {
            setErrorText("Please use a valid URL.")
        } else {
            setErrorText("");
        }
    }, [file, setErrorText, url]);

    return (
        <div
            className={'bg-slate-700 h-screen w-screen flex flex-col items-center justify-center text-white space-y-8'}>
            <div className="w-full flex flex-col items-center space-y-2">
                <div className={"flex w-full items-center justify-center space-x-4"}>
                    <input
                        className={'p-2 w-1/2 bg-white rounded-lg border border-white focus:border-teal-400 text-slate-700 outline-none'}
                        placeholder="Paste an YGOProdeck URL here ..."
                        onChange={handleUrlChange}
                        onKeyDown={handleEnterKey}
                    />
                    <span>or</span>
                    <input
                        type="file"
                        onChange={handleImport}
                    />
                </div>
                {errorText && <span className={"text-center text-white"}>{errorText}</span>}
            </div>
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
