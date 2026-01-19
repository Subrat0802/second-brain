import { useState } from "react";
import Button from "../../ui/Button";
import InputTag from "../../ui/InputTag";
import TextArea from "../../ui/TextArea";
import { toast } from "sonner";
import { contentEndpoint } from "../../../services/api";
import useGetUser from "../../../services/getUserHook";


const ImageForm = () => {
  const [imageForm, setImageForm] = useState({
    contentType: "Image",
    title: "",
    description: "",
    image: null as File | null,
  });

  const { refreshUser } = useGetUser();

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement &
      HTMLTextAreaElement;

    setImageForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, 
    }));
  };

  const handleSubmit = async () => {
    if (!imageForm.image) {
      toast.error("Please select an image");
      return;
    }

    if (!imageForm.title || !imageForm.description) {
      toast.error("Title and description are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", imageForm.title);
    formData.append("description", imageForm.description);
    formData.append("contentType", imageForm.contentType);
    formData.append("image", imageForm.image);

    try {
      const res = await fetch(contentEndpoint.CREATE_CONTENT, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ message: "Failed to upload image" }));
        toast.error(errorData.message || `Error: ${res.status} ${res.statusText}`);
        return;
      }

      const data = await res.json();
      
      if (data.success) {
        toast.success(data.message || "Image uploaded successfully");
        await refreshUser();
        handleClear();
      } else {
        toast.error(data.message || "Failed to upload image");
      }
    } catch (err) {
      console.error("UPLOAD ERROR:", err);
      toast.error("Network error. Please check your connection and try again.");
    }
  };

  const handleClear = () => {
    setImageForm({
      contentType: "Image",
      title: "",
      description: "",
      image: null,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <InputTag
        placeText="Title"
        labelText="Title:"
        id="title"
        type="text"
        onChange={onChangeHandler}
        name="title"
        value={imageForm.title}
      />

      <TextArea
        label="Description"
        htmlFor="description"
        placeholder="Description"
        id="description"
        rows={4}
        onChange={onChangeHandler}
        name="description"
        value={imageForm.description}
      />

      <InputTag
        labelText="Upload Image:"
        placeText="Upload Image"
        id="image"
        type="file"
        onChange={onChangeHandler}
        name="image"
      />

      <div className="flex gap-3 mt-5">
        <Button
          text="Submit"
          size="md"
          variant="primary"
          onClick={handleSubmit}
        />
        <Button
          text="Clear"
          size="md"
          variant="tertiary"
          onClick={handleClear}
        />
      </div>
    </div>
  );
};

export default ImageForm;
