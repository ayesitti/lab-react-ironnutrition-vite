import { Divider, Input } from "antd";

function Search(props) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        name="search"
        value={props.searchString}
        type="text"
        onChange={(e) => {
          props.handleSearch(e.target.value);
        }}
      />
    </>
  );
}

export default Search;
