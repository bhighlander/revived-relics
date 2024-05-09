'use client'

import { deleteImage } from "../../../api/imageUploadManager";

interface DeleteProjectButtonProps {
  imageName: string;
  onDelete: (imageName: string) => void;
}

export const DeleteProjectButton: React.FC<DeleteProjectButtonProps> = ({ imageName, onDelete }) => {
  const handleDelete = async () => {
    try {
      const message = await deleteImage(imageName);
      onDelete(imageName);
      console.log(message);
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return <button onClick={handleDelete}>delete</button>;
}
