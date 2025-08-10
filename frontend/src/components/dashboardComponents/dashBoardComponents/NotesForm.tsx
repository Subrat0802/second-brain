import Button from "../../ui/Button"
import InputTag from "../../ui/InputTag"

const NotesForm = () => {
  return (
    <div className="flex flex-col gap-4">
        <InputTag type="text" labelText="Title:" id="title" placeText="Title"/>
        <div className="flex flex-col">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="description"
            rows={4}
            className="bg-[#374151] rounded-xl p-2"
          />
        </div>
        <Button text="Submit" size="md" varient="primary" />
    </div>
  )
}

export default NotesForm