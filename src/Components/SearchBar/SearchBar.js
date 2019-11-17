import React, {useState} from "react";
import { Paper, TextField } from "@material-ui/core";

export const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        props.formSubmit(searchTerm)
    }

    console.log(searchTerm)

  return (
    <Paper elevation={6} style={{ padding: "30px" }}>
      <div>
        <h1>SearchBar</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search..." name={searchTerm} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </form>
    </Paper>
  );
};
