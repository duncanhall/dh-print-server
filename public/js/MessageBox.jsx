
var MessageBox = React.createClass({

  render: function () {
    return (
      <form>
        <h1><label htmlFor="print-message">Print-o-tron</label></h1>
        <textarea className="form-control" rows="7" id="print-message"
          value={this.state.msg}
          onChange={this.handleChange}>
        </textarea>
        <button type="submit" className="btn btn-default pull-right" id="submit-btn"
          onClick={this.handleSubmit}>
          <span className="glyphicon glyphicon-print" aria-hidden="true"></span> PC LOAD LETTER
        </button>
      </form>
    );
  },

  getInitialState: function () {
    return {msg:''};
  },

  handleChange: function(event) {
    this.setState({msg: event.target.value});
  },

  handleSubmit: function (event) {
    event.preventDefault();

    $.ajax({
      url: '/printer/add-print-job',
      method: 'POST',
      data: {msg: this.state.msg}
    })
    .then(function () {

    })
    .error(function () {

    });
  }
});


React.render(<MessageBox />, document.getElementById('content'));