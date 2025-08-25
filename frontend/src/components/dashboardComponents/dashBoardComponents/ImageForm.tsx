import { useState } from "react";
import Button from "../../ui/Button";
import InputTag from "../../ui/InputTag";
import TextArea from "../../ui/TextArea";
import { toast } from "sonner";


const ImageForm = () => {
  const [imageForm, setImageForm] = useState({
    contentType: "Image",
    title: "",
    description: "",
    image: null as File | null,
  });

  // Handle text + file inputs
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement &
      HTMLTextAreaElement;

    setImageForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // if it's file input → files[0]
    }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", imageForm.title);
    formData.append("description", imageForm.description);
    formData.append("contentType", imageForm.contentType);
    if (imageForm.image) {
      formData.append("image", imageForm.image);
    }

    try {
      const res = await fetch("http://localhost:3001/api/v1/content/create", {
        method: "POST",
        body: formData,
        credentials: "include", // if using cookies for auth
      });

      const data = await res.json();
      toast.success("Image uplaoded")
      console.log("UPLOAD RESPONSE:", data);
    } catch (err) {
      console.error("UPLOAD ERROR:", err);
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
