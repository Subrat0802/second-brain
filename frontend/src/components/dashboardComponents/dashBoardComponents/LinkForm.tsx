import Button from '../../ui/Button'
import InputTag from '../../ui/InputTag'

const LinkForm = () => {
  return (
    <div className="flex flex-col gap-3">
        <InputTag placeText='Url' labelText='URL:' id='url' type='text'/>
        <InputTag placeText='Title' labelText='Title:' id='title' type='text'/>
        <div className="flex flex-col">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="description"
            rows={4}
            className="bg-[#374151] rounded-xl p-2"
          />
        </div>
        <InputTag placeText='Tags' labelText='Tags:' id='tag' type='text'/>
        <Button text="Submit" size="md" varient="primary" />
      </div>
  )
}

export default LinkForm