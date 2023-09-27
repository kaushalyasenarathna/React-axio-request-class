import React, { Component } from 'react';
import Axios from 'axios';
import Mainapp from '../../layouts/Mainapp';
import ContactCard from '../../components/ContactCard';
import '../../styles/style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      loading: true,
    };
  }

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({
        contacts: JSON.parse(storedContacts),
        loading: false,
      });
    } else {
      Axios.get('https://www.melivecode.com/api/users')
        .then((response) => {
          this.setState({
            contacts: response.data,
            loading: false,
          });
        })
        .catch((error) => {
          console.error('Error loading contacts from API:', error);
          this.setState({ loading: false });
        });
    }
  }

  handleRemoveContact = (index) => {
    this.setState(
      (prevState) => {
        const updatedContacts = [...prevState.contacts];
        updatedContacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        return { contacts: updatedContacts };
      },
      () => {
      }
    );
  };

  render() {
    const { contacts, loading } = this.state;

    return (
      <div>
        <Mainapp>
          <div className="card mt-5">
            <div className="card-body">
              <div className="row justify-content-center">
                <h2 className="text-center text-info">Contact List</h2>

                {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : contacts.length > 0 ? (
                  contacts.map((contact, index) => (
                    <ContactCard
                      key={index}
                      contact={contact}
                      index={index}
                      onRemove={this.handleRemoveContact}
                    />
                  ))
                ) : (
                  <p>No contacts available.</p>
                )}
              </div>
            </div>
          </div>
        </Mainapp>
      </div>
    );
  }
}

export default Home;
