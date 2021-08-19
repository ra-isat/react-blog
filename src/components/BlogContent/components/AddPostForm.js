import './AddPostForm.css'

export const AddPostForm = () => {
    return (
      <>
        <form action="" className="addPostForm">
          <div>
            <input type="text" name="postTitle" />
          </div>
          <div>
              <textarea name="postDesc"></textarea>
          </div>
          <div>
              <button className="blackBtn" type="button">Добавить</button>
          </div>
        </form>
        <div className="overlay"></div>
      </>
    )
}