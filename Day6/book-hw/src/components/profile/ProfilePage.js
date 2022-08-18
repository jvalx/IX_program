import React, { useEffect, useState } from 'react';

import  service from '../../services/profile.service';
import { Profile } from '../../models/profile';

import Spinner from '../common/Spinner';
import Alert from '../common/Alert';
import Button from '../common/Button';

export default function ProfilePage({ user }) {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');

  const [fetching, setFetching] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    setFetching(true);
    try {
      const profile = await service.readProfile(user);
      if (profile) {
        setName(profile.name);
        setSurname(profile.surname);
        setAge(profile.age);
        setCountry(profile.country);
      }
    } catch (err) {
      setError(err.message);
    }
    setFetching(false);
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    setSaving(true);
    try {
      const profile = new Profile({
        id: user.uid,
        name: name,
        surname: surname,
        age: age,
        country: country
      });

      await service.saveProfile(profile);
      setMessage('Your profile has been saved');
      console.log(profile);
    } catch (err) {
      setError(err.message);
    }
    setSaving(false);
  }

  return (
    <div className='container mt-5'>
      {
        fetching ?
          <div className='text-center'>
            <Spinner />
          </div>
          :
          <div className='card card-body'>
            <h1 className='text-center'>Profile</h1>
            <form onSubmit={onFormSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Surname</label>
                <input
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="form-control"
                  type="number"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className='d-grid'>
                <Button type="submit" loading={saving} >
                  Save Profile
                </Button>
              </div>
            </form>

            {
              error ?
                <Alert className='mt-4'>
                  {error}
                </Alert>
                :
                <></>
            }

            {
              message ?
                <Alert variant='success' className='mt-4'>
                  {message}
                </Alert>
                :
                <></>
            }
          </div>
      }
    </div>
  )
}