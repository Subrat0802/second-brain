import Button from "../../ui/Button"
import InputTag from "../../ui/InputTag"

const ImageForm = () => {
  return (
    <div className="flex flex-col gap-4">
        <InputTag placeText="Title" labelText="Title:" id="title" type="text"/>
        <div className="flex flex-col">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="description"
            rows={4}
            className="bg-[#374151] rounded-xl p-2"
          />
        </div>

        <InputTag labelText="Upload Image:" placeText="Upload Image" id="image" type="file"/>
        <Button text="Submit" size="md" variant="primary" />
    </div>
  )
}

export default ImageForm