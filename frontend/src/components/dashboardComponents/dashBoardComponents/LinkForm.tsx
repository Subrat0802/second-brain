import { useRef, useState } from "react";
import Button from "../../ui/Button";
import InputTag from "../../ui/InputTag";
import TextArea from "../../ui/TextArea";
import { createContent } from "../../../services/operations/content";
import useGetUser from "../../../services/getUserHook";
import { toast } from "sonner";

const LinkForm = () => {
  const [type, setType] = useState("");
  const linkRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const {refreshUser} = useGetUser();

  const handleOnChange = () => {
    console.log("desc", linkRef.current?.value);
    const link = linkRef.current?.value || "";
    const linkSplit = link.split(".");
  
    if(linkSplit.includes("https://x")){
      setType("X")
    }else if(linkSplit.includes("instagram")){
      setType("Instagram")
    }else if(linkSplit.includes("youtube")){
      setType("Youtube")
    }else if(linkSplit.includes("facebook")){
      setType("Facebook")
    }else{
      setType("Other")
    }
  }
  
  const handleSubmit = async () => {
    const link = linkRef.current?.value || "";
    const title = titleRef.current?.value || "";
    const description = descriptionRef.current?.value || "";
    const tag = tagRef.current?.value || "";
    const contentType = "Link"

    const response = await createContent({contentType, link, title, description, tag, type}) ?? "";
    console.log("LINK RESPONSE", response);
    if(response === ""){
      return toast.error("Content not added.")
    }
    toast.success(response.data?.message);
    refreshUser();
    if (linkRef.current) linkRef.current.value = "";
    if (titleRef.current) titleRef.current.value = "";
    if (descriptionRef.current) descriptionRef.current.value = "";
    if (tagRef.current) tagRef.current.value = "";
  }

  return (
    <div className="flex flex-col gap-3 text-black dark:text-white/80">
      <InputTag placeText="Url" labelText="URL:" id="url" type="text" ref={linkRef} onChange={handleOnChange}/>
      <InputTag placeText="Title" labelText="Title:" id="title" type="text" ref={titleRef}/>
      <TextArea
        label="Description"
        htmlFor="description"
        placeholder="Description"
        id="description"
        rows={4}
        onChange={handleOnChange}
        ref={descriptionRef}
      />
      <InputTag placeText="Tags" labelText="Tags:" id="tag" type="text" ref={tagRef}/>
      <div className="flex  gap-3 right-0  mt-5">
        <Button text="Submit" size="md" variant="primary" onClick={handleSubmit} />
        <Button text="Clear" size="md" variant="tertiary"  />
      </div>
    </div>
  );
};

export default LinkForm;
