export const CreateProfileDialogId = 'create-profile-dialog';

export function CreateProfileDialog() {
  return (
    <dialog id={CreateProfileDialogId}>
      <article>
        <hgroup>
          <h1>Create profile</h1>
          <p>Bla bla bla goes here.</p>
        </hgroup>
        <form id="profile-create" autoComplete="off">
          <fieldset>
            <label>
              Name
              <input
                required
                name="name"
                placeholder="Production Boxes"
              />
            </label>
            <label>
              Success
              <input
                required
                type="url"
                name="success"
                placeholder="https://api.myapp.com/sucess"
              />
            </label>
            <label>
              Failure
              <input
                required
                type="url"
                name="failure"
                placeholder="https://api.myapp.com/failure"
              />
            </label>
          </fieldset>
        </form>
        <footer>
          <button
            type="button"
            className="secondary"
            command="close"
            commandfor={CreateProfileDialogId}
          >
            Cancel
          </button>
          <button
            type="submit"
            form="profile-create"
          >
            Confirm
          </button>
        </footer>
      </article>
    </dialog>
  );
}
