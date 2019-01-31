import * as  React from "react";
import "./style.css";

export interface Props {
  results: Array<string>
}

function SearchResults({ results }: Props) {
  return (
    <ul className="list-group search-results">
      {results.map((result: string) => (
        <li key={result} className="list-group-item">
          <img alt="Dog" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
