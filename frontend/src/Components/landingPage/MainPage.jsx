import { useState, useEffect } from "react";

function MainPage() {
  const apiUrl = "http://localhost:1337/api/samsungs";
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setPhones(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {phones.map((item) => (
        <div key={item.id}>
          <img src={item.attributes.Img} alt="" />
          <p>{item.attributes.Model}</p>
        </div>
      ))}
    </div>
  );
}

export default MainPage;
