import React from "react";
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookname: "",
      bookprice: 0,
    };
  }
  render() {
    return (
      <div>
        <form className="row" onSubmit={(e) => {
              e.preventDefault();
              this.props.additem(this.state.bookname,Number(this.state.bookprice));
            }}>
          <div className="mb-3 col-6">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="emailHelp"
              name="bookname"
              onChange={(e) => {
                this.setState({ bookname: e.currentTarget.value });
              }}
              value={this.state.bookname}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="inputPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="inputprice"
              name="bookprice"
              onChange={(e) => {
                this.setState({ bookprice: Number( e.currentTarget.value) });
              }}
              value={this.state.bookprice}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Are you a student?
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-2"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
