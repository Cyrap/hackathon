'use client'
import { useRouter } from "next/navigation"
type Props = {
    url:string;
}

export default function DeleteBtn({url}:Props){
    const router = useRouter();
    return (
        <button onClick={async ()=>{
            await fetch('/api/file',{
                method:"DELETE",
                body: JSON.stringify({
                    url,
                }),
            })
            router.refresh()
        }}>
            delete
        </button>
    )
}