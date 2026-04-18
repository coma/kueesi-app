import {useState} from 'react';

import {
  KeyRoundIcon,
  PencilIcon,
  TrashIcon,
  PlusCircleIcon,
} from 'lucide-react';
import {
  EditProfileDialogId,
  EditProfileDialog,
} from './EditProfileDialog';
import {
  ProfileSecretDialogId,
  ProfileSecretDialog,
} from './ProfileSecretDialog';
import {
  CreateProfileDialogId,
  CreateProfileDialog,
} from './CreateProfileDialog';

export function ProfilesView() {
  const [profile, setProfile] = useState('');

  return (
    <>
      <hgroup>
        <h1>Profiles</h1>
        <p>Bla bla bla goes here.</p>
      </hgroup>
      <table className="striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Boxes</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Default</th>
            <td>2,000</td>
            <td>
              <div className="actions">
                <button
                  type="button"
                  className="secondary"
                  data-tooltip="Get secret key"
                  command="show-modal"
                  commandfor={ProfileSecretDialogId}
                >
                  <KeyRoundIcon />
                </button>
                <button
                  type="button"
                  className="secondary"
                  data-tooltip="Edit"
                  command="show-modal"
                  commandfor={EditProfileDialogId}
                  onClickCapture={() => setProfile('Default')}
                >
                  <PencilIcon />
                </button>
                <button
                  type="button"
                  className="danger"
                  disabled
                  data-tooltip="Delete"
                >
                  <TrashIcon />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Madrid</th>
            <td>1,000</td>
            <td>
              <div className="actions">
                <button
                  type="button"
                  className="secondary"
                  data-tooltip="Get secret key"
                  command="show-modal"
                  commandfor={ProfileSecretDialogId}
                >
                  <KeyRoundIcon />
                </button>
                <button
                  type="button"
                  className="secondary"
                  data-tooltip="Edit"
                  command="show-modal"
                  commandfor={EditProfileDialogId}
                  onClickCapture={() => setProfile('Madrid')}
                >
                  <PencilIcon />
                </button>
                <button
                  type="button"
                  className="danger"
                  data-tooltip="Delete"
                  command="show-modal"
                  commandfor="create-profile"
                >
                  <TrashIcon />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          type="button"
          command="show-modal"
          commandfor={CreateProfileDialogId}
        >
          <PlusCircleIcon />
          <span>Create</span>
        </button>
      </div>
      <EditProfileDialog key={profile} profile={profile} />
      <ProfileSecretDialog />
      <CreateProfileDialog />
    </>
  );
}
