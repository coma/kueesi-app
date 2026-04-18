import {CopyIcon, RotateCcwKeyIcon} from 'lucide-react';

export const ProfileSecretDialogId = 'profile-secret-dialog';

export function ProfileSecretDialog() {
  return (
    <dialog id={ProfileSecretDialogId}>
      <article>
        <hgroup>
          <h1>Profile Secret</h1>
          <p>Use this to configure your implementation</p>
        </hgroup>
        <form id="profile-create" autoComplete="off">
          <fieldset role="group">
            <input
              readOnly
              type="text"
              name="secret"
              defaultValue="************************************E%YEH"
            />
            <button
              type="button"
              data-tooltip="Copy"
            >
              <CopyIcon />
            </button>
            <button
              type="button"
              className="danger"
              data-tooltip="Rotate"
            >
              <RotateCcwKeyIcon />
            </button>
          </fieldset>
        </form>
        <footer>
          <button
            type="button"
            className="secondary"
            command="close"
            commandfor={ProfileSecretDialogId}
          >
            Close
          </button>
        </footer>
      </article>
    </dialog>
  );
}
