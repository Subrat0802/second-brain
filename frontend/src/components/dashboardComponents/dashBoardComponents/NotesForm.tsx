import Button from "../../ui/Button"
import InputTag from "../../ui/InputTag"
import TextArea from "../../ui/TextArea"

const NotesForm = () => {
  return (
    <div className="flex flex-col gap-4">
        <InputTag type="text" labelText="Title:" id="title" placeText="Title"/>
        <TextArea label='Description' htmlFor='description' placeholder='Description' id='description' rows={4}/>
        <div className="flex  gap-3 right-0  mt-5">
        <Button text="Submit" size="md" variant="primary" />
        <Button text="Clear" size="md" variant="tertiary" />
      </div>
    </div>
  )
}

export default NotesForm