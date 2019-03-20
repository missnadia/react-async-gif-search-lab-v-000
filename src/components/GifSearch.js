import React, {Component} from 'react'

export default class GifSearch extends Component {
   state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }
  
  handleChange = event => { 
    event.persist() 
    this.setState({ 
      [event.target.id]: event.target.value 
    }) 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}