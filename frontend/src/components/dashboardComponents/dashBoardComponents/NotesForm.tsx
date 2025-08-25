import { useState } from "react";
import Button from "../../ui/Button";
import InputTag from "../../ui/InputTag";
import TextArea from "../../ui/TextArea";
import { toast } from "sonner";

const NotesForm = () => {
  const [notesForm, setNotesForm] = useState({
    contentType: "Notes",
    title: "",
    description: "",
  });

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNotesForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("contentType", notesForm.contentType)
    formData.append("title", notesForm.title);
    formData.append("description", notesForm.description);
    try{
      const response = await fetch("http://localhost:3001/api/v1/content/create", {
        method:"POST",
        body:formData,
        credentials: "include"
      });
      const data = await response.json();
      toast.success(data.success === true ? "Notes created": "Notes not created")   
      console.log("NOTES CREATED", data);
    }catch(error){
      console.log("Error", error);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <InputTag
        type="text"
        labelText="Title:"
        id="title"
        placeText="Title"
        onChange={handelChange}
        value={notesForm.title}
        name="title"
      />
      <TextArea
        label="Description"
        htmlFor="description"
        placeholder="Description"
        id="description"
        rows={4}
        value={notesForm.description}
        name="description"
        onChange={handelChange}
      />
      <div className="flex  gap-3 right-0  mt-5">
        <Button text="Submit" size="md" variant="primary" onClick={handleSubmit} />
        <Button text="Clear" size="md" variant="tertiary" />
      </div>
    </div>
  );
};

export default NotesForm;
