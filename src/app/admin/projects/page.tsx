import { list } from "@vercel/blob";
import DeleteProjectButton from "../components/deleteProjectButton";

export default async function AllProjectsPage() {
  const { blobs } = await list();
  return (
    <div>
      {blobs.map((blob) => (
        <div key={blob.url}>
          <div>{blob.pathname}</div>
          <div>
            <img src={blob.url} alt={blob.pathname} style={{ maxWidth: "100px" }} />{" "}
            - <DeleteProjectButton url={blob.url} />
          </div>
        </div>
      ))}
    </div>
  );
}
