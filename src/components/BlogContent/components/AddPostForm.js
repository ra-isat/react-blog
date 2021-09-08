import './AddPostForm.css'
import CloseIcon from '@material-ui/icons/Close';

export const AddPostForm = ({ handleAddFormHide }) => {
    return (
      <>
        <form action="" className="addPostForm">
          <button className="hideBtn" onClick={handleAddFormHide}>
            <CloseIcon/>
          </button>
          
          <h2>Создать пост</h2>
          <div>
            <input placeholder="заголовок поста" type="text" name="postTitle" />
          </div>
          <div>
              <textarea placeholder="описание поста" name="postDesc"></textarea>
          </div>
          <div>
              <button onClick={handleAddFormHide} className="blackBtn" type="button">Добавить</button>
          </div>
        </form>
        <div onClick={handleAddFormHide} className="overlay"></div>
      </>
    )
}