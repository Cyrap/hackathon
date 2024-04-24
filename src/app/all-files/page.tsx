import { list } from "@vercel/blob";
import DeleteBtn from "./delete_btn";
export default async function AllFilesPage() {
    const { blobs } = await list();
    console.log({ blobs });
    return (
        <div>
            {blobs.map(blob => (
                <div key={blob.url}>
                    {blob.url} - <DeleteBtn url={blob.url}/>
                </div>
            ))}
        </div>
    );
}
