import React from "react";

function ListPerson({ persons }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {persons.map((e, key) => {
        return (
          <div key={key} className="mx-4">
            <img src={e.url} alt="" className="rounded-circle" />
            <div style={{color:'#18305D'}}>
              <strong>{e.name}</strong>

              <p>{e.cargo}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListPerson;
