'use client'

import { useRouter } from "next/navigation";

type Props = {
  url: string;
}

export default function DeleteProjectButton({url}: Props){
  const router = useRouter()
  return <button onClick={async() =>{
    await fetch(`../admin/upload/api/image`, {
      method: "DELETE",
      body: JSON.stringify({
        url,
      }),
    })
    router.refresh()
  }
  }>Delete</button>
}
