import React, { useState, useEffect } from "react";

const Problem2 = () => {
  const [modalAVisible, setModalAVisible] = useState(false);
  const [modalBVisible, setModalBVisible] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [onlyEven, setOnlyEven] = useState(false);

  useEffect(() => {
    // Simulating API call to fetch contacts
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ); // Replace with your actual API endpoint
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const openModalA = () => {
    setModalAVisible(true);
    setModalBVisible(false);
  };

  const openModalB = () => {
    setModalBVisible(true);
    setModalAVisible(false);
  };

  const closeModal = () => {
    setModalAVisible(false);
    setModalBVisible(false);
  };

  const filterContacts = () => {
    if (onlyEven) {
      return contacts.filter((contact) => contact.id % 2 === 0);
    }
    return contacts;
  };

  const filterUSContacts = () => {
    return filterContacts().filter((contact) => contact.country === "US");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            style={{ color: "#46139f" }}
            onClick={openModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            style={{ color: "#ff7f50" }}
            onClick={openModalB}
          >
            US Contacts
          </button>
        </div>

        {/* Modal A */}
        {modalAVisible && (
          <div className="modal">
            <div className="modal-content">
              <h3>Modal A</h3>

              <button style={{ color: "#ff7f50" }} onClick={openModalB}>
                Modal Button B
              </button>
              <button
                style={{
                  color: "#ffffff",
                  background: "#46139f",
                  borderColor: "#46139f ",
                  marginTop: "10px",
                }}
                onClick={closeModal}
              >
                Close
              </button>

              <label>
                <input
                  type="checkbox"
                  onChange={() => setOnlyEven(!onlyEven)}
                />
                Only even
              </label>
              <ul>
                {filterContacts().map((contact) => (
                  <li key={contact.id}>
                    {contact.name} - {contact.country}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Modal B */}
        {modalBVisible && (
          <div className="modal">
            <div className="modal-content">
              <h3>Modal B</h3>

              <button style={{ color: "#46139f" }} onClick={openModalA}>
                Modal Button A
              </button>

              <button
                style={{
                  color: "#ffffff",
                  background: "#46139f",
                  borderColor: "#46139f ",
                  marginTop: "10px",
                }}
                onClick={closeModal}
              >
                Close
              </button>

              <label>
                <input
                  type="checkbox"
                  onChange={() => setOnlyEven(!onlyEven)}
                />
                Only even
              </label>
              <ul>
                {filterContacts().map((contact) => (
                  <li key={contact.id}>
                    {contact.name} - {contact.country}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Problem2;
