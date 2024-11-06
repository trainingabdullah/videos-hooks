import React, { useState } from "react";
// transform from claas Component to functional componnent
const SearchBar = ({ onFormSubmit }) => {
  //init value
  const [term, setTerm] = useState("");
  //function to handle change add const from breves class comonnent

  const onSubmit = (event) => {
    // preventDefault
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment  ">
      <form onSubmit={onSubmit} className=" ui form">
        <div className="field ">
          <label className="">Search For Video:</label>
          <input
            className=" ui segment"
            value={term}
            type="text "
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
        </div>
      </form>{" "}
    </div>
  );
};
// class SearchBar extends React.Component {
//   // state = { term: "" };
//   // onInputChange = (event) => {
//   //   this.setState({ term: event.target.value });
//   // };
//   // onFormSubmit = (event) => {
//   //   // preventDefault
//   //   event.preventDefault();
//   //   this.props.onFormSubmit(this.state.term);
//   // };

//   // render() {
//   //   return (
//   //     <div className="search-bar ui segment  ">
//   //       <form onSubmit={this.onFormSubmit} className=" ui form">
//   //         <div className="field ">
//   //           <label className="">Video Search</label>
//   //           <input
//   //             className=" ui segment"
//   //             value={this.state.term}
//   //             type="text "
//   //             onChange={this.onInputChange}
//   //           />
//   //         </div>
//   //       </form>{" "}
//   //     </div>
//   //   );
//   // }
// }
export default SearchBar;
