import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import "./Create.css";

const Create = () => {
  const data = useContext(UserContext);
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ0NDg0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITIhJSkrLi4vFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMcA/QMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQYFBAMCB//EADwQAQACAQAFCQUFBwUBAAAAAAABAgMEBREx0QYSFiFBUVJxkSJCYYGxEyMzgsEyQ2JzkqHhU2NyovEU/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP7UAAIoIqAAACoAogCiPzkyVpHOtaKx32nZAP0rl59e4K9UTa//ABjq9Zea3KSvZit87QDuo4lOUdPex3jymJe3R9bYMnVF4rPdf2Qe8QAABUAFEAFQBUAFRUBUFBFQAAAAAAABxdfa05n3OOfbmPbtHux3eYP3rTXVcW2mLZbJumfdrxlndI0i+W3OyWm0/HdHlHY+QAAAAD2aDrPLgmObO2ngt1x8u5p9X6wppFdteq0ftUnfHGGMfvBmtjtF6TstG6f0Bux5dW6bGkY4tHVaOq9e6eD1AAAAAAAAACoCoqAAAAAAAAA8+sNKjDivknfEbKx32ncxV7zaZtM7ZmZmZ75dzlRn68eKN0RN5890fq4QAAAAAAAAPZqnTPsMtbe5bZW8fCe35NkwLY6mz/aaPjmd8RzZ84B7QAAAAAAAAAURQRUAAAVABRAGR1/fbpN/4YrX+239XPe/XsbNKy/Hmz/1h4AAAAAAAAAGk5LX+7yV7rxPrH+GbaLktX2Ms996x6R/kHdQAUQBRAFEAUQBUFBAAAAAAAUGZ5T4dmWl+y1dnzj/ANcZr9daJ9tgtER7dPbr8dm+PRkAAAAAAAAAGs5P4eZo9Z7bzN+H0ZnQ9HnLkpjj3p657q9stvSkVrFY3ViIjygFAAAAAAAAFQFQAAAAAAAAAGY19q77O05aR93afaiPctwadL0i0TW0RMTGyYnriYBgh2Naaltj23xRNqb5rvtXjDjgAAAAEQ/WLFa9orSs2tO6IjbLS6p1PGLZky7LZOyN9acZB+9R6u+xpz7x95eN3hr3OqgAqAKIAogCiAKgAAAAAAAAAAAAAPFpmqsWbrtXm28VOqf8vckyDOZuTl4/DyVtHdaJrLzW1HpEe7WfK0NTOWsb7Vj80Pz/APVj/wBSn9UAzNNQ553xSvnZ7tH5ORvy5Jn+GkbP7y7MaTjndkp/VD9xeJ3WifnAPlo2i48UbMdIr3z2z5y+woIAAKgAKAgAKgAKgAACoAAAAAD4aXpdMNedktsjsjfNp7ohmtP1zky7YrM46d1Z9qY+Mg0Ol6zw4dsWvE28NfalydI5R23YscR8bztn0hwgHty62z335Zj4V2V+jy3zXt+1e0+dpfgARQEWJmN0zHkAPtj0vLX9nJePzS9mHXmeu+1bx3Xr+sOaA0mjcoaT1ZKTSe+s86vF1sGkUyRtx2i0fCd3mwr9YstqTFqWmto7YnZIN6OBq7X23ZTP1dkZIjq+cO9ExMbYnbE7pjcCoAKIAqACoAAAAAAADzaw0yuCk3t1zurXttL0zOyJmd0dcsbrTTZz5Zt7sezSO6vf8wfHS9KvmvN7ztmd0dlY7ofEAAAAAAAAAAAAAHU1PrWcMxS87cU+tJ74+DlgN9ExMRMdcT1xPwVwuTenbYnBaeusbcfl2w7oAACKAIqAoAIAAADm8oNI+z0eYjfkmKfLfP8Ab6sm0HKqerDHxvP0Z8AAAAAAAAAAAAAAAAH10TNOLJTJHu2ifOO2PRuYmJiJjdMbY8mBbfQJ24cU/wC3X6A+4oCCoAKAAAgAAAODyq/c/n/Rn3f5Vfufz/o4AAAAAAAAAAAAAAAAADbav/Axfy6/RiW21f8AgYv5dfoD0iAKgAogCiAKIoIADg8qv3P5/wBGfbLWGrqaRzefa0c3bs5uztePo7i8eT1rwBmRpujuLx5PWvA6O4vHk9a8AZkabo7i8eT1rwOjuLx5PWvAGZGm6O4vHk9a8Do7i8eT1rwBmRpujuLx5PWvA6O4vHk9a8AZkabo7i8eT1rwOjuLx5PWvAGZGm6O4vHk9a8Do7i8eT1rwBmRpujuLx5PWvA6O4vHk9a8AZkabo7i8eT1rwOjuLx5PWvAGZbbV/4GL+XX6Of0dxePJ614OrhxxSlaRurEVjbv2QD6IqAqKgKIoAAIoAgoCCgIKAigAigIoAgoAAAAAAAigAAAAAAP/9k="
  );

  // name : "",
  // age :"",
  // sex :" ",
  // fname :"",
  // mname :"",
  // address :"",
  // skilledSports : "",
  // achievements :" ",
  // journeyWriteUp:"",
  // creatorName:"",
  // creatorWalletAddress :""

  return (
    <>
      <div className="createpage">
        <h2>Add Player Data</h2>
        <div className="playerdataformcontainer">
          <div className="profilepiccontainer">
            <img src={selectedFile} alt="" />
          </div>
          <div className="profilepictext">Upload profile pic</div>

          <div className="playerdataform">
            <input type="text" placeholder="Player Name" />
            <input type="number" placeholder="Player Age in years" />
            Select gender
            <select name="genderfield" id="genderfield">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="text" placeholder="Father's Name" />
            <input type="text" placeholder="Mother's Name" />
            <input type="text" placeholder="Address" />
            Select Sport
            <select name="" id="">
              <option value="">Cricket</option>
              <option value="">Volleyball</option>
              <option value="">Athletics</option>
            </select>
            Describe player's journey
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button
              onClick={() => {
                navigate("/talent");
              }}
            >
              <h3>Add Player</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Create;
