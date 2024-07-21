import { Typography } from "@mui/material";
import Link from "next/link";

export default function AdminPage() {
  return (
  <>
  <h1>Admin Page</h1>
  <Link href="/admin/projects">
    <Typography variant="h5">
      View/Delete Current Project Photos
    </Typography>
  </Link>
  <Link href="/admin/upload">
    <Typography variant="h5">
      Upload New Project Photo
    </Typography>
    </Link>
  </>
  )
}
