import * as React from "react";
import "./style.css";

export interface Props {
  search?: string,
  handleInputChange: any,
  breeds: Array<string>,
  handleFormSubmit: any

}

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm({ search, handleInputChange, breeds, handleFormSubmit }: Props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Breed Name:</label>
        <input
          value={search}
          onChange={handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="breed"
        />
        <datalist id="breeds">
          {breeds.map((breed: string) => (
            <option value={breed} key={breed} />
          ))}
        </datalist>
        <button type="submit" onClick={handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
