import './AddPostForm.css'
import CloseIcon from '@material-ui/icons/Close';
import { Component } from 'react';

export class AddPostForm extends Component {

  state = {
    postTitle: '',
    postDescription: '',
  }

  handlePostTitleChange = (e) => {
    this.setState({
      postTitle: e.target.value,
    })
  }

  handlePostDescription = (e) => {
    this.setState({
      postDescription: e.target.value,
    })
  }

  render() {
    const handleAddFormHide = this.props.handleAddFormHide
    return (
      <>
        <form action="" className="addPostForm">
          <button className="hideBtn" onClick={handleAddFormHide}>
            <CloseIcon/>
          </button>
          
          <h2>Создать пост</h2>
          <div>
            <input 
            value={this.state.postTitle}
            onChange={this.handlePostTitleChange} 
            placeholder="заголовок поста" 
            type="text" 
            name="postTitle" />
          </div>
          <div>
              <textarea 
              value={this.state.postDescription} 
              placeholder="описание поста" 
              name="postDesc"
              onChange={this.handlePostDescription}
              ></textarea>
          </div>
          <div>
              <button onClick={handleAddFormHide} className="blackBtn" type="button">Добавить</button>
          </div>
        </form>
        <div onClick={handleAddFormHide} className="overlay"></div>
      </>
    )
  }  
    
}