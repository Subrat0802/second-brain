import Button from "../../ui/Button"
import InputTag from "../../ui/InputTag"
import TextArea from "../../ui/TextArea"

const ImageForm = () => {
  return (
    <div className="flex flex-col gap-4">
        <InputTag placeText="Title" labelText="Title:" id="title" type="text"/>
        <TextArea label='Description' htmlFor='description' placeholder='Description' id='description' rows={4}/>

        <InputTag labelText="Upload Image:" placeText="Upload Image" id="image" type="file"/>
        <div className="flex  gap-3 right-0  mt-5">
        <Button text="Submit" size="md" variant="primary" />
        <Button text="Clear" size="md" variant="tertiary" />
      </div>
    </div>
  )
}

export default ImageForm