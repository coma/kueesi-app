import {useState} from 'react';

export function ProfilesView() {
  const [isOpen, setIsOpen] = useState(false);

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
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Default</th>
            <td>2,000</td>
            <td>
              <div className="grid">
                <button type="button" className="secondary" onClick={() => setIsOpen(true)}>
                  Edit
                </button>
                <button type="button" className="danger" disabled>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Madrid</th>
            <td>1,000</td>
            <td>
              <div className="grid">
                <button type="button" className="secondary" onClick={() => setIsOpen(true)}>
                  Edit
                </button>
                <button type="button" className="danger" onClick={() => setIsOpen(true)}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>Create</button>
      </div>
      <dialog open={isOpen}>
        <article>
          <h2>Confirm Your Membership</h2>
          <p>
            Thank you for signing up for a membership!
            Please review the membership details below:
          </p>
          <ul>
            <li>Membership: Individual</li>
            <li>Price: $10</li>
          </ul>
          <footer>
            <button type="button" className="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button>Confirm</button>
          </footer>
        </article>
      </dialog>
    </>
  );
}
