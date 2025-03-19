"use client"

interface ErrorPageProps{
    error: Error,
    reset: () => void
}

export default function Error(){
    return <div>
        <h2> Error !</h2>
        <p> Something went wrong, please try again.</p>
        <button> Retry </button>
    </div>
}