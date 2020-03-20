import React from "react";
import data from "../../data.js"

class PostedList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedItem: {}
    }
  }

  updateData(id){
    const selected = data.filter( item => item.id === parseInt(id) );
    this.setState({ selectedItem: selected[0] })
  }

  componentDidMount(){
    const { id } = this.props.match.params
    this.updateData(id)
  }

  componentWillReceiveProps(newProps){
    const { id } = newProps.match.params
    this.updateData(id)
  }

  render(){
    return (
      <>
        <div className="posted-list">
          <p>
            <strong>Name: </strong><br/>
            {this.state.selectedItem.name}
          </p>

          <p>
            <strong>Description: </strong><br/>
            {this.state.selectedItem.description}
          </p>

          <p>
            <strong>Cost: </strong><br/>
            {this.state.selectedItem.cost}
          </p>
        </div>
      </>
    )
  }
}

export default PostedList